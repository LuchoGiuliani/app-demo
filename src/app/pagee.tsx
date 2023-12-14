import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import logo from "../../public/logo.png"
import { UserType } from "@/types/user.types";
import Message from "@/components/messages/Message";

export default function Home() {

  const messages = [
    {
      user: {
        name: "Han Solo",
        username: "hsolo",
      } as UserType,

      message: "Segundo Mensaje",
      repliesCount: 2,
    },
    {
      user: {
        name: "Anakin Skywalker",
        username: "Anakin",
      } as UserType,

      message: "primer Mensaje",
      repliesCount: 13,
    },
  ];
  return (
    <main className="bg-gray-900">
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="bg-gray-800 w-[460px] h-[680px] rounded-2xl flex flex-col  items-center gap-6">
        <h1 className="text-white text-2xl font-bold py-10"> <span className="text-yellow-400">Red</span> Social <span className="text-yellow-400 "> Star </span>Wars</h1>
        <Image
            priority
            className="rounded-full"
            src={logo}
            width={150}
            height={150}
            alt="Anakin"
          />

        
        <Link className="text-white text-xl hover:text-blue-500 pt-8 " href="/users"> Ver usuarios</Link>
        <div>
        <section className="flex flex-col mb-8">
          {messages.map((message, index) => (
            <Message key={`${index}`} message={message} />
          ))}
        </section>
        </div>
        </div>
      </div>
    </main>
  );
}
