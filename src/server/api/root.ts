import { exampleRouter } from "~/server/api/routers/example";
import { createInnerTRPCContext, createTRPCRouter } from "~/server/api/trpc";
import { getServerAuthSession } from "../auth";
import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

export const createCaller = async () => {
  const session = await getServerAuthSession();
  const caller = createServerSideHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ session }),
    transformer: superjson,
  });

  return caller;
};

// export type definition of API
export type AppRouter = typeof appRouter;
