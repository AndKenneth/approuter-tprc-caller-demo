"use client";

import { api } from "~/utils/api";

export default function HybridClient() {
  const messageQuery = api.example.hello.useQuery({
    text: "hybrid viewer",
  });

  return (
    <div>
      <h1>Hybrid</h1>
      <p>
        the trpc route is prefetched from a server component so the result is
        available immediately to the client component via cache, but full client
        behaviour of the trpc route is still available.
      </p>
      <p>{messageQuery.data?.greeting}</p>
    </div>
  );
}
