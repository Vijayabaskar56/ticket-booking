import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import { Hero } from "@/components/header/Hero";
import { Promotion } from "@/components/header/Promotion";
export default async function Home() {
  // void api.post.getLatest.prefetch();
  const session = await getServerAuthSession();
  return (
    <HydrateClient>
      <main className="w-screen bg-orange-300">
        <Hero />
        <Promotion />
      </main>
    </HydrateClient>
  );
}
