export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-2">
          No events found
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Try adjusting your filters to see more results.
        </p>
      </div>
    </div>
  );
}

