
// import { getServerAuthSession } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import { Hero } from "@/components/header/Hero";
import { Promotion } from "@/components/header/promotion";
export default async function Home() {
 // void api.post.getLatest.prefetch();
 // const session = await getServerAuthSession();
 return (
  <HydrateClient>
   <main className="w-screen ">
    <Hero />
    <Promotion />
   </main>
  </HydrateClient>
 );
}
