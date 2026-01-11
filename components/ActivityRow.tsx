"use client";

import type { AuditEvent } from "@/types/event";

interface ActivityRowProps {
  event: AuditEvent;
}

export default function ActivityRow({ event }: ActivityRowProps) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 py-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              {event.title}
            </span>
            <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              {event.type}
            </span>
          </div>
          {event.actor && (
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              by {event.actor.name}
            </div>
          )}
          <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
            {new Date(event.createdAt).toLocaleString()}
          </div>
        </div>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700"
        >
          Details
        </button>
        {/* TODO: Implement expand/collapse state */}
        {/* TODO: Render metadata details safely when expanded */}
      </div>
    </div>
  );
}

