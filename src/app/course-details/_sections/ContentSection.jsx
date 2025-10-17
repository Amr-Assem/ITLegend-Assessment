import React from "react";

export default function ContentSection({ courseData }) {
  return (
    <div className="bg-background order-2 row-span-3">
      <h3 className="text-2xl font-semibold text-text-base mb-6">
        Topics for This Course
      </h3>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="relative py-6 w-full">
          {/* BG bar */}
          <div className="w-full bg-gray-200 h-1.5 rounded-full"></div>

          {/* Filled bar */}
          <div
            className="absolute left-0 top-6 h-1.5 bg-primary-base rounded-full"
            style={{ width: `${courseData.completionProgress}%` }}></div>

          {/* Marker group */}
          <div
            className="absolute -top-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{ left: `${courseData.completionProgress}%` }}>
            {/* Bubble */}
            <div className="mb-2 flex flex-col items-center">
              <div className="w-9 h-9 border-2 border-gray-300 bg-white text-xs leading-8.5 text-center text-[#3c4aa7] rounded-full">
                You
              </div>
              <div className="mt-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-gray-300"></div>
            </div>

            {/* Percentage */}
            <div className="mt-2 text-xs font-medium text-[#3c4aa7]">
              {courseData.completionProgress}%
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="space-y-10">
        {courseData.courseContent.map((content) => (
          <div key={content.id} className="border-1 border-border px-5 py-7">
            <h4 className="text-xl font-medium mb-2">{content.heading}</h4>
            <p className="text-sm pb-3 border-b border-border">
              {content.description}
            </p>
            <>
              {content.items.map((item, index) => {
                const isString = typeof item === "string";
                const title = isString ? item : item.title;
                const quiz = isString ? undefined : item.quiz;
                return (
                  <div
                    className="flex justify-between items-center gap-2 border-b border-border py-3 group transition-colors"
                    key={index}>
                    <div className="text-sm text-text-base group-hover:text-primary-hover cursor-default">
                      <span className="icon-chapter pr-2"></span>
                      {title}
                    </div>
                    {quiz ? (
                      <div className="flex flex-wrap justify-end items-center gap-2 text-sm text-text-muted">
                        <div className="px-2 py-1 bg-success-muted text-success-base text-nowrap">{quiz.questions} Questions</div>
                        <div className="px-2 py-1 bg-error-muted text-error-base text-nowrap">{quiz.minutes} Minutes</div>
                      </div>
                    ) : (
                      <div className="icon-lock group-hover:text-primary-hover"></div>
                    )}
                  </div>
                );
              })}
            </>
          </div>
        ))}
      </div>
    </div>
  );
}
