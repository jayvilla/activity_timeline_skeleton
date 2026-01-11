"use client";

import type { EventType } from "@/types/event";

export default function FiltersBar() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sm:flex-row sm:items-center">
      <div className="flex-1">
        <label htmlFor="type-filter" className="block text-sm font-medium mb-1">
          Type
        </label>
        <select
          id="type-filter"
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
        >
          <option value="">All types</option>
          <option value="note.created">Note Created</option>
          <option value="note.updated">Note Updated</option>
          <option value="task.created">Task Created</option>
          <option value="integration.synced">Integration Synced</option>
          <option value="error">Error</option>
        </select>
        {/* TODO: Sync filter value to URL query params */}
      </div>
      <div className="flex-1">
        <label htmlFor="from-date" className="block text-sm font-medium mb-1">
          From
        </label>
        <input
          id="from-date"
          type="date"
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
        />
        {/* TODO: Sync filter value to URL query params */}
      </div>
      <div className="flex-1">
        <label htmlFor="to-date" className="block text-sm font-medium mb-1">
          To
        </label>
        <input
          id="to-date"
          type="date"
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
        />
        {/* TODO: Sync filter value to URL query params */}
      </div>
    </div>
  );
}

