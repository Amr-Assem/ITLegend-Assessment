"use client";
import React from "react";

export default function LeaderboardModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div className="relative bg-background w-[min(92vw,640px)] max-h-[90vh] overflow-auto p-6">
        <button
          className="absolute top-3 right-3 text-sm text-text-muted px-2 py-1.5 hover:text-text-base hover:bg-border rounded-md cursor-pointer"
          onClick={onClose}>
          <span className="icon-close"></span>
        </button>

        <h3 className="text-2xl font-semibold text-text-base mb-2">
          Leaderboard
        </h3>
        <div className="flex bg-success-muted text-success-base rounded-sm p-4 items-center gap-4 mb-6 flex-row-reverse">
          <img src="./muscle-emoji.svg" alt="" />
          <p className="text-text-base text-right">
            عظيم يا صديقي! أداءك في الكورس ده أفضل من 60% من باقي الطلبة .. كمّل
            عايز أشوف اسمك في الليدر بورد هنا
          </p>
        </div>

        <ul className="space-y-3 bg-success-muted p-4 rounded-sm">
          {[1, 2, 3, 4, 5].map((i) => (
            <li
              key={i}
              className="flex items-center gap-4 bg-background p-2 border border-border rounded-sm">
              <img
                src={`/images/comment-0${((i - 1) % 3) + 1}.jpg`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 text-sm font-medium text-text-base">
                Student {i}
              </div>
              <div className="text-sm font-semibold text-text-base">#{i}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
