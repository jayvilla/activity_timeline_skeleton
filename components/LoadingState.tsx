export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-zinc-50 mb-4"></div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading events...</p>
      </div>
    </div>
  );
}

