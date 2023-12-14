"use client";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Message from "./Message";
import messageApi from "@/services/messages/messages.service";
import useMessages from "../contexts/message.context";


const MessageList = () => {
const {messages} = useMessages()
 
  return (
    <>
      {" "}
      {messages.map((message, index) => (
        <Message key={`${index}`} message={message} />
      ))}
    </>
  );
};
export default MessageList;
