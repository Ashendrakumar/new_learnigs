"use client";
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-3xl font-bold">
        <button
          onClick={(event) => {
            event.preventDefault();
            reset();
          }}
        >
          {" "}
          Retry
        </button>
        Error: Review not found {error.message}
      </p>
    </div>
  );
}
