import React from "react";

export default function VideoSection({ courseData }) {
  return (
    // TODO: Video Update
    <div className="bg-background order-1">
      {/* Video */}
      <img src="/video.png" className="aspect-auto" />

      {/* Icon Buttons Below Video */}
      <div className="flex gap-3 py-8">
        <button className="flex items-center justify-center w-10 h-10 border border-border hover:bg-primary-base hover:text-background cursor-pointer rounded-full">
          <span className="icon-facebook"></span>
        </button>
        <button className="flex items-center justify-center w-10 h-10 border border-border hover:bg-primary-base hover:text-background cursor-pointer rounded-full">
          <span className="icon-twitter"></span>
        </button>
        <button className="flex items-center justify-center w-10 h-10 border border-border hover:bg-primary-base hover:text-background cursor-pointer rounded-full">
          <span className="icon-linkedin"></span>
        </button>
        <button className="flex items-center justify-center w-10 h-10 border border-border hover:bg-primary-base hover:text-background cursor-pointer rounded-full">
          <span className="icon-youtube"></span>
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
                <span className="icon-lessons"></span>
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
                <span className="icon-lessons"></span>
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
    </div>
  );
}
