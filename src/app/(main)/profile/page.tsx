

import UserPageContainerAsync from "@/components/users/UserPageContainerAsync";
import userApi from "@/services/users/users.service";
import { createClient } from "redis";
import { cookies } from "next/headers";
const client = createClient({
    url: "redis://default:SocialNetworkPass@localhost:6379",
  });
  
  client.connect().then(() => {
    console.log("connected to redis");
  });

const ProfilePage = async () => {
    const cookieStore = cookies()
    const sessionId = cookieStore.get("SocialSessionID")
    const accessToken =  await client.get(sessionId?.value ?? "")

    if(!accessToken) return new Response(JSON.stringify({error: "user is not authenticated"}),{
        status:403,
    })
  const me = await userApi.getMeInternal(accessToken); 
  return <UserPageContainerAsync username={me.username} />;
};

export default ProfilePage;