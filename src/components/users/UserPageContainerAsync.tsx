
import UserTabs from "@/components/users/UserTabs";
import Image from "next/image";
import Link from "next/link";

import userApi from "@/services/users/users.service";

type UserPageContainerProps = {
    username:string
}

const UserPageContainerAsync = async ({username}: UserPageContainerProps) => {
        const userPromise =  userApi.getUserData(username);
        const userMessagesPromise =  userApi.getUserMessages(username);
        const userMessageRepliesPromise =  userApi.getUserMessageReplies(username);
      
        const [user,userMessages,userMessageReplies] = await Promise.all([userPromise,userMessagesPromise,userMessageRepliesPromise])
       
      
        return (
          <main className="flex flex-col bg-slate-800 gap-6 p-4 m-2 rounded-xl">
            <section className="flex flex-col mb-2">
              <div className="rounded-full py-4 ">
                <Image
                  priority
                  className="rounded-full"
                  src={user.photoUrl}
                  width={90}
                  height={90}
                  alt="Anakin"
                />
              </div>
              <h2 className="font-semibold text-xl border-t text-white  mb-1">{user.name}</h2>
              <div className="text-md mb-4 text-white cursor-pointer hover:text-gray-200">
                @<Link href={`/users/${user.username}`}>{user.username}</Link>
              </div>
              <div className="mb-4 text-white">{user.bio}</div>
              <div className="flex justify-between mb-4 border-y py-4">
                <div className="text-white">
                  <span className="font-semibold text-white">{user.followersCount}</span>{" "}
                  Seguidores
                </div>
                <div className="text-white">
                  <span className="font-semibold text-white">{user.followingCount} </span>
                  Siguiendo{" "}
                </div>
              </div>
            </section>
            <UserTabs messages={userMessages.content} replies={userMessageReplies.content} />
      
          
          </main>
        )
}
export default UserPageContainerAsync