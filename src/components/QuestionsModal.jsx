"use client";
import React, { useEffect, useState } from "react";

export default function QuestionsModal({ isOpen, onClose, courseData }) {
  const STORAGE_KEY = "questionsModalDraft";
  const [text, setText] = useState("");

  // Load draft on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) setText(saved);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    localStorage.setItem(STORAGE_KEY, value);
  };

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, text);
    onClose();
  };

  const handleSubmit = () => {
    if (text.trim() === "") return;
    localStorage.removeItem(STORAGE_KEY);
    setText("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        aria-hidden
      />

      {/* Modal */}
      <div className="relative bg-background w-[min(92vw,640px)] max-h-[90vh] overflow-auto p-6">
        <button
          className="absolute top-3 right-3 text-sm text-text-muted px-2 py-1.5 hover:text-text-base hover:bg-border rounded-md cursor-pointer"
          onClick={handleClose}>
          <span className="icon-close"></span>
        </button>

        <h3 className="text-2xl font-semibold text-text-base mb-4">
          Questions
        </h3>

        <div className="space-y-5">
          {courseData.comments.slice(0, 3).map((comment) => (
            <div key={comment.id} className="flex items-start gap-4">
              <img
                src={comment.imageUrl}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-text-base">
                  {comment.name}
                </div>
                <div className="text-xs text-text-muted mb-1">
                  {comment.date}
                </div>
                <div className="text-sm text-text-muted">{comment.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Ask a question */}
        <div className="mt-6">
          <textarea
            className="w-full p-3 border border-border focus:outline-none focus:border-primary-base rounded-sm text-sm"
            rows="3"
            placeholder="Ask a question"
            value={text}
            onChange={handleChange}
          />
          <div className="mt-3 flex justify-end">
            <button
              className="bg-primary-base text-background rounded-sm px-5 py-2 hover:bg-primary-hover transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={text.trim() === ""}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
