"use client";
import React, { useEffect, useState } from "react";

export default function QuizModal({ isOpen, onClose, quizData }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Initialize quiz state from sessionStorage or defaults
  useEffect(() => {
    if (isOpen && quizData) {
      const storageKey = `quiz_${quizData.id}`;
      const saved = sessionStorage.getItem(storageKey);

      if (saved) {
        const parsed = JSON.parse(saved);
        setCurrentQuestion(parsed.currentQuestion);
        setSelectedAnswers(parsed.selectedAnswers);
        setTimeLeft(parsed.timeLeft);
      } else {
        setCurrentQuestion(0);
        setSelectedAnswers({});
        setTimeLeft(quizData.minutes * 60);
      }
      setIsSubmitted(false);
    }
  }, [isOpen, quizData]);

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isSubmitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isSubmitted, timeLeft]);

  // Save progress to sessionStorage
  useEffect(() => {
    if (isOpen && quizData && !isSubmitted) {
      const storageKey = `quiz_${quizData.id}`;
      sessionStorage.setItem(
        storageKey,
        JSON.stringify({
          currentQuestion,
          selectedAnswers,
          timeLeft,
        })
      );
    }
  }, [
    currentQuestion,
    selectedAnswers,
    timeLeft,
    isOpen,
    quizData,
    isSubmitted,
  ]);

  if (!isOpen || !quizData) return null;

  const questions = quizData.questions || [];
  const totalQuestions = questions.length;
  const currentQ = questions[currentQuestion];

  function handleAnswerSelect(answerIndex) {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    });
  }

  function handleNext() {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function handleSubmit() {
    setIsSubmitted(true);
    sessionStorage.removeItem(`quiz_${quizData.id}`);
  }

  function handleClose() {
    if (!isSubmitted) {
      // Save progress before closing
      const storageKey = `quiz_${quizData.id}`;
      sessionStorage.setItem(
        storageKey,
        JSON.stringify({
          currentQuestion,
          selectedAnswers,
          timeLeft,
        })
      );
    }
    onClose();
  }

  function calculateScore() {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }

  if (isSubmitted) {
    const score = calculateScore();
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={handleClose}
          aria-hidden
        />

        {/* Result */}
        <div className="relative bg-background w-[min(92vw,640px)] p-8 text-center">
          <h3 className="text-3xl font-semibold text-text-base mb-4">
            Quiz Completed!
          </h3>
          <div className="text-6xl font-bold text-primary-base mb-4">
            {percentage}%
          </div>
          <p className="text-xl text-text-base mb-6">
            You answered {score} correctly out of {totalQuestions}
          </p>
          <button
            className="bg-primary-base text-background px-8 py-3 hover:bg-primary-hover transition-colors cursor-pointer rounded-sm"
            onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        aria-hidden
      />

      {/* Quiz */}
      <div className="relative bg-primary-base w-[min(95vw,480px)] h-[min(90vh,820px)] flex flex-col text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <button
            className="text-white text-2xl cursor-pointer hover:bg-black/10 px-3 rounded-sm"
            onClick={handleClose}>
            <span className="icon-angle-left"></span>
          </button>
          <div className="bg-[#F4D03F] text-text-base px-4 py-2 font-semibold flex items-center gap-2 rounded-sm">
            <span className="icon-duration"></span>
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Question Navigation Dots */}
        <div className="flex justify-center gap-4 px-6 pb-6">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-12 h-12 flex items-center justify-center border-2 rounded-full font-medium transition-colors cursor-pointer ${
                index === currentQuestion
                  ? "bg-background text-text-base border-background"
                  : "border-background bg-transparent"
              }`}>
              {index + 1}
            </button>
          ))}
        </div>

        {/* Question Content */}
        <div className="flex-1 bg-background text-text-base overflow-auto p-6">
          <div className="text-2xl font-bold mb-2">{currentQuestion + 1}.</div>
          <p className="text-lg mb-8">{currentQ?.question}</p>

          <div className="space-y-3">
            {currentQ?.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestion] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 border-2 flex items-center gap-4 text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-primary-base text-background border-primary-base"
                      : "bg-gray-50 border-border hover:border-primary-base"
                  }`}>
                  <div
                    className={`w-6 h-6 border-2 flex items-center justify-center ${
                      isSelected ? "border-background" : "border-border"
                    }`}>
                    {isSelected && (
                      <div className="w-3 h-3 bg-background"></div>
                    )}
                  </div>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="bg-background p-6 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="text-text-base font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:text-primary-base rounded-sm">
            Previous
          </button>

          {currentQuestion === totalQuestions - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length !== totalQuestions}
              className="bg-primary-base text-background px-8 py-3 hover:bg-primary-hover transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-sm">
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-primary-base text-background px-8 py-3 hover:bg-primary-hover transition-colors cursor-pointer rounded-sm">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
