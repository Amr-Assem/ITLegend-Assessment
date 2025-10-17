"use client";
import React, { useState } from "react";

export default function CommentsSection({ courseData }) {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="bg-background p-6 order-4">
      <h2 className="text-3xl font-semibold">Comments</h2>

      {/* Comments List */}
      <div className="mb-8">
        {courseData.comments.map((comment, idx) => (
          <div
            key={comment.id}
            className={`flex gap-4 py-5 ${
              idx !== courseData.comments.length - 1 && "border-b border-border"
            }`}>
            {/* Avatar */}
            <img
              src={comment.imageUrl}
              alt={comment.name}
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Comment Content */}
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">{comment.name}</p>
              <p className="text-sm font-medium mb-2">{comment.date}</p>
              <p className="text-sm">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <div className="space-y-4">
        <textarea
          className="w-full p-4 border border-transparent focus:outline-none focus:border-primary-base centered-shadow text-sm rounded-sm"
          rows="4"
          placeholder="Write a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}></textarea>
        <button
          className="bg-primary-base text-background rounded-sm px-6 py-3 hover:bg-primary-hover transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={commentText.trim() === ""}>
          Submit Review{" "}
          <span className="icon-arrow-right text-[10px] pl-2"></span>
        </button>
      </div>
    </div>
  );
}
