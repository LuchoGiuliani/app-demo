"use client"

import { MessageType } from "@/types/message.types";
import Image from "next/image";
import Link from "next/link";
import UserCard from "../users/UserCard";
import RepliesCounter from "../counters/RepliesCounter";
import { useRouter } from "next/navigation";

type MessageProps = {
    message: MessageType; 
}

const Message = ( {message}:MessageProps)=> {
  const router = useRouter()
    return <>
          <UserCard user ={message.user}  >
            <p className="text-white">{message.message}</p>
            <div>
              <RepliesCounter count={message.repliesCount} 
              onClick={()=> router.push(`/messages/${message.id}`)}/> 
            </div>
          </UserCard>
          </>
}
export default Message;