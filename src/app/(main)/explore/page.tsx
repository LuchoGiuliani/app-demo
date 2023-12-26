import ExploreTabs from "@/components/explore/ExploreTabs";
import Message from "@/components/messages/Message";
import exploreApi from "@/services/explore/explore.service";
import Link from "next/link";


const ExplorePage = async ({searchParams}: {searchParams?: {[key:string]:string | undefined}}) => {

    const hashesPromise =  exploreApi.getTrendingHashtags(0,20)
    const usersPromise =  exploreApi.getFollowRecommendations(0,20)

    const [hashes,users] = await Promise.all([hashesPromise, usersPromise])

  return (
    <>
      <main className="flex flex-col bg-slate-800 p-8">
        <section className="flex flex-col mb-8">
            <ExploreTabs hashtags={hashes} users={users} initialTab={searchParams?.type} />
        </section>
      </main>
    </>
  );
};

export default ExplorePage;
