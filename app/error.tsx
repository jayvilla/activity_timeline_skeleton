"use client";

import ErrorState from "@/components/ErrorState";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-4xl mx-auto bg-white dark:bg-black">
        <header className="border-b border-zinc-200 dark:border-zinc-800 px-4 py-6">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Activity
          </h1>
        </header>
        <ErrorState />
        {/* TODO: Implement retry/reset functionality */}
      </div>
    </div>
  );
}

