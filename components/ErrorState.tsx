export default function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-2">
          Something went wrong
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          We encountered an error while loading events.
        </p>
        {/* TODO: Add retry/reset button */}
      </div>
    </div>
  );
}

