import Link from "next/link";
import PostCounter from "../counters/PostsCounter";
import { TrendingHashTag } from "@/types/hash.types";
import MessageHashtag from "../messages/MessageHashtag";

type ExploreTrendingProps = {
  hashes: TrendingHashTag[];
};

const ExploreTrending = ({ hashes }: ExploreTrendingProps) => {
  if (!hashes || hashes.length === 0) return <></>;
  return (
    <>
      <div className="bg-gray-800 rounded-lg p-4 m-2">
        <h2 className="mb-2 text-white">Trending</h2>
        {hashes &&
          hashes.slice(0,2).map((hash, index) => (
            <div key={`trending-hash-${index}`} className="mb-4">
             <MessageHashtag hash={hash}/>
            </div>
          ))}
        {hashes.length > 2 && 
        <Link href="/explore?type=HASHTAGS">
        <div className="text-center link-primary">Ver Mas</div>
        </Link>
        }
      </div>
    </>
  );
};
export default ExploreTrending;
