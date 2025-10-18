import React from "react";
import { courseData } from "@/data/courseData";
import TitleSection from "./_sections/TitleSection";
import VideoSection from "./_sections/VideoSection";
import CommentsSection from "./_sections/CommentsSection";
import ContentSection from "./_sections/ContentSection";
import VideoPlayer from "@/components/VideoPlayer";

export default function CourseDetailsPage() {
  return (
    <>
      <TitleSection courseData={courseData} />

      <div className="px-8 py-4 grid course__grid">
        <VideoPlayer courseData={courseData} />
        <VideoSection courseData={courseData} />
        <CommentsSection courseData={courseData} />
        <ContentSection courseData={courseData} />
      </div>
    </>
  );
}
