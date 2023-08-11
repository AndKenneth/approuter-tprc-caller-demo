import { Hydrate, dehydrate } from "@tanstack/react-query";
import { createCaller } from "~/server/api/root";
import InitialViewer from "./initialViewer";

export default async function InitialPage() {
  const caller = await createCaller();
  await caller.example.hello.prefetch({ text: "initial viewer" });

  return (
    <Hydrate state={dehydrate(caller.queryClient)}>
      <InitialViewer />
    </Hydrate>
  );
}
