"use client"
import messageApi from "@/services/messages/messages.service";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useMessages from "../../contexts/message.context";

type MessagePostFormType = {
  parentId?: string,
}

type FormData = {
    message:string,
    
}

const MessagePostForm = ({parentId}: MessagePostFormType) => {
  const {postMessage} = useMessages()
 const {register, handleSubmit,resetField,setFocus } = useForm<FormData>();

 useEffect(()=> {
    setFocus("message")
 },[setFocus])

 const onSubmit = async(data:FormData) => {
    await postMessage(data.message, parentId)
    resetField("message")
    setFocus("message")
   
    
 } 

  return (
    <div className="flex items-center w-full border-b pb-4 mb-2">
      <div className="flex flex-col gap-6 w-full">
        <div>
          <div className="rounded-full pt-4  text-center">
            <Image
              priority
              className=" rounded-full"
              src={"https://i.pinimg.com/564x/62/ce/55/62ce5561877ab6a4587a2b7dedd4c5ca.jpg"}
              width={60}
              height={40}
              alt={""}
            />
          </div>
        </div>
        <div className="flex gap-6  ">
            <form className="rounded-sm gap-6 flex justify-between items-center w-full" onSubmit={handleSubmit(onSubmit)}>
           
            <textarea className="p-2 text-black rounded-md" placeholder="¿Qué estas pensando?"  rows={4} {...register("message",{
                required:true
            })} />
      <button onClick={handleSubmit(onSubmit)} className="button-primary mx-2 ">Postear</button>
      </form>
    </div>
    </div>
    </div>
  );
};
export default MessagePostForm;
