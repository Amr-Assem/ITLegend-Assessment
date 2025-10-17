import Link from "next/link";
import React from "react";

export default function TitleSection({ courseData }) {
  return (
    <div className="px-8 pt-4 pb-2 bg-[#F5F9FA]">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-4 text-sm">
        <Link href="/" className="hover:text-text-base">
          Home
        </Link>
        <span className="icon-angle-right"></span>
        <Link href="/" className="hover:text-text-base">
          Courses
        </Link>
        <span className="icon-angle-right text-text-base"></span>
        <span className="text-text-base font-medium">Course Details</span>
      </div>

      {/* Course Title */}
      <h1 className="text-3xl font-semibold text-text-base">{courseData.title}</h1>
    </div>
  );
}
