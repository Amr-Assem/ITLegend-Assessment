"use client";
import Link from "next/link";
import React, { useState } from "react";
import LeaderboardModal from "@/components/LeaderboardModal";
import QuestionsModal from "@/components/QuestionsModal";

export default function VideoSection({ courseData }) {
  const [openLeaderboard, setOpenLeaderboard] = useState(false);
  const [openQuestions, setOpenQuestions] = useState(false);

  const iconButtonClass =
    "flex items-center justify-center w-10 h-10 border border-border hover:bg-primary-base hover:text-background cursor-pointer rounded-full";

  return (
    <div className="bg-background order-3">
      {/* Icon Buttons Below Video */}
      <div className="flex gap-3 pb-4">
        <Link href="#content-section" className={iconButtonClass}>
          <span className="icon-curriculum"></span>
        </Link>
        <Link href="#comments-section" className={iconButtonClass}>
          <span className="icon-comments"></span>
        </Link>
        <button
          type="button"
          className={iconButtonClass}
          onClick={() => setOpenLeaderboard(true)}>
          <span className="icon-leaderboard"></span>
        </button>
        <button
          type="button"
          className={iconButtonClass}
          onClick={() => setOpenQuestions(true)}>
          <span className="icon-questions"></span>
        </button>
      </div>

      {/* Course Materials */}
      <div className="py-4">
        <h2 className="text-3xl font-semibold mb-4">Course Materials</h2>

        <div className="flex gap-20 py-4 px-5 centered-shadow">
          {/* Column 1 */}
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between py-3 mx-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="icon-duration text-text-base text-xl"></span>
                <span className="text-sm">Duration:</span>
              </div>
              <span className="text-text-base font-medium text-sm">
                {courseData.courseMaterials.duration}
              </span>
            </div>

            <div className="flex items-center justify-between py-3 mx-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="icon-lessons text-text-base"></span>
                <span className="text-sm">Lessons:</span>
              </div>
              <span className="text-text-base font-medium text-sm">
                {courseData.courseMaterials.lessons}
              </span>
            </div>

            <div className="flex items-center justify-between py-3 mx-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="icon-enrolled text-text-base text-xl"></span>
                <span className="text-sm">Enrolled:</span>
              </div>
              <span className="text-text-base font-medium text-sm">
                {courseData.courseMaterials.enrolled} Students
              </span>
            </div>

            <div className="flex items-center justify-between py-3 mx-3">
              <div className="flex items-center gap-3">
                <span className="icon-language text-text-base text-xl"></span>
                <span className="text-sm">Language:</span>
              </div>
              <span className="text-text-base font-medium text-sm">
                {courseData.courseMaterials.language}
              </span>
            </div>
          </div>

          {/* Column 2 (Duplicate) */}
          <div className="hidden md:flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between py-3 mx-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="icon-duration text-text-base text-xl"></span>
                <span className="text-sm">Duration:</span>
              </div>
              <span className="text-text-base font-medium text-sm">
                {courseData.courseMaterials.duration}
              </span>
            </div>

            <div className="flex items-center justify-between py-3 mx-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="icon-lessons text-text-base"></span>
                <span className="text-sm">Lessons:</span>
              </div>
              <span className="text-text-base font-medium text-sm">
                {courseData.courseMaterials.lessons}
              </span>
            </div>

            <div className="flex items-center justify-between py-3 mx-3 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="icon-enrolled text-text-base text-xl"></span>
                <span className="text-sm">Enrolled:</span>
              </div>
              <span className="text-text-base font-medium text-sm">
                {courseData.courseMaterials.enrolled} Students
              </span>
            </div>

            <div className="flex items-center justify-between py-3 mx-3">
              <div className="flex items-center gap-3">
                <span className="icon-language text-text-base text-xl"></span>
                <span className="text-sm">Language:</span>
              </div>
              <span className="text-text-base font-medium text-sm">
                {courseData.courseMaterials.language}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <div id="leaderboard-modal">
        <LeaderboardModal
          isOpen={openLeaderboard}
          onClose={() => setOpenLeaderboard(false)}
        />
      </div>
      <div id="questions-modal">
        <QuestionsModal
          isOpen={openQuestions}
          onClose={() => setOpenQuestions(false)}
          courseData={courseData}
        />
      </div>
    </div>
  );
}
