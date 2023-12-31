import { Hydrate, dehydrate } from "@tanstack/react-query";
import { createCaller } from "~/server/api/root";
import HybridClient from "./hybridClient";

export default async function InitialPage() {
  const caller = await createCaller();
  await caller.example.hello.prefetch({ text: "hybrid viewer" });

  return (
    <Hydrate state={dehydrate(caller.queryClient)}>
      <HybridClient />
    </Hydrate>
  );
}
