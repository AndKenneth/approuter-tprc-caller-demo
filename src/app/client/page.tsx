"use client";

import { api } from "~/utils/api";

export default function Client() {
  const messageQuery = api.example.hello.useQuery({
    text: "client viewer",
  });

  return (
    <div>
      <h1>client</h1>
      <p>
        this trpc route isn&apos;t prefetched from a server component so the
        result is not available immediately to the client component via cache,
        but the trpc route still works exactly like we expect it to.
      </p>
      <p>{messageQuery.data?.greeting}</p>
    </div>
  );
}
