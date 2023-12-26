"use client"

import { MessageType } from "@/types/message.types";
import Message from "../messages/Message";
import { useState } from "react";

enum TabView {
    MESSAGES, REPLIES
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
};

const UserTabs = ({ messages, replies }: UserTabsProps) => {
    const [tab,setTab] =  useState<TabView>(TabView.MESSAGES)
  return (
    <>
      <div className="flex justify-evenly mb-4">
        <div onClick={()=> setTab(TabView.MESSAGES)} className={`cursor-pointer text-white ${tab === TabView.MESSAGES ? "border-blue-400 text-white border-b-2 " :"" }`}>
          Mensajes
        </div>
        <div onClick={()=> setTab(TabView.REPLIES)} className={`cursor-pointer text-white  ${tab === TabView.REPLIES ? "border-blue-400 text-white border-b-2 " :"" }`}>Respuestas</div>
      </div>
      <div>
        {tab === TabView.MESSAGES && messages.map((message, index) => (
          <Message key={`${index}`} message={message} />
        ))}
        {tab === TabView.REPLIES && replies.map((message, index) => (
          <Message key={`${index}`} message={message} />
        ))}
      </div>
    </>
  );
};

export default UserTabs;
