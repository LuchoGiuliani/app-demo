import Link from "next/link"
import PostCounter from "../counters/PostsCounter"
import { TrendingHashTag } from "@/types/hash.types"

type MessageHashtagProps = {
    hash: TrendingHashTag
}

const MessageHashtag = ({hash}: MessageHashtagProps) => {
    return <>
     <Link href={`/?query=${hash.hash?.replace("#","") ?? ""}&type=hash`}>
                <h4 className="font-semibold cursor-pointer p-1 text-white">
                  {hash.hash}
                </h4>
              </Link>
              <div className="px-1 text-white">
                <PostCounter count={hash.count} />
              </div>
    </>
}
export default MessageHashtag