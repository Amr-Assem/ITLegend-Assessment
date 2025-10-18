"use client";
import React, { useEffect } from "react";

export default function PdfViewerModal({ isOpen, onClose, pdfPath, title }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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
      <div className="relative bg-background w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h3 className="text-lg font-semibold text-text-base">{title}</h3>
          <button
            className="text-sm text-text-muted px-2 py-1.5 hover:text-text-base hover:bg-border rounded-md cursor-pointer"
            onClick={onClose}>
            <span className="icon-close"></span>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden">
          <iframe src={pdfPath} className="w-full h-full" title={title} />
        </div>
      </div>
    </div>
  );
}
