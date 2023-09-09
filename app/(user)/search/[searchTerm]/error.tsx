"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <p>Something Went Wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
