export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-4xl mx-auto bg-white dark:bg-black">
        <header className="border-b border-zinc-200 dark:border-zinc-800 px-4 py-6">
          <div className="h-8 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
        </header>
        <div className="border-b border-zinc-200 dark:border-zinc-800 px-4 py-4">
          <div className="flex gap-4">
            <div className="flex-1 h-10 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            <div className="flex-1 h-10 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            <div className="flex-1 h-10 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-20 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

