import { createCaller } from "~/server/api/root";

export default async function HomePage() {
  const caller = await createCaller();

  const helloMessage = await caller.example.hello.fetch({
    text: "homepage viewer",
  });

  return (
    <div>
      <h1>Home</h1>
      <p>
        The trpc route is hit from a server component, the result is used
        directly.
      </p>
      <p>{helloMessage.greeting}</p>
    </div>
  );
}
