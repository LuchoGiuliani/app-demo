"use client"


import { TrendingHashTag } from "@/types/hash.types";
import { TrendingUserType } from "@/types/user.types";
import { useEffect, useState } from "react";
import UserCard from "../users/UserCard";
import MessageHashtag from "../messages/MessageHashtag";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PageType } from "@/types/pagination.types";
import UserList from "../users/UserList";
import MessageHashtagList from "../messages/MessageHashtagList";

enum TabView {
    HASHTAGS, USERS
}

type ExploreTabsProps = {
  hashtags: PageType<TrendingHashTag>,
  users: PageType<TrendingUserType>,
  initialTab?: string;
};

const ExploreTabs = ({ hashtags, users ,initialTab}: ExploreTabsProps) => {
    const searchParams = useSearchParams()
    const [tab,setTab] =  useState<TabView>(initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS)

    useEffect(()=>{
        const type = searchParams.get("type")
        setTab(type ? TabView[type as keyof typeof TabView] : tab)
    },[searchParams,tab])
  return (
    <>
      <div className="flex justify-evenly mb-4">
        <Link href="/explore?type=HASHTAGS" >
       <div className={`cursor-pointer ${tab === TabView.HASHTAGS ? "border-blue-400 border-b-2 " :"" }`}>
          Hashtags
          </div>
        </Link>
        <Link href="/explore?type=USERS">
        <div  className={`cursor-pointer  ${tab === TabView.USERS ? "border-blue-400 border-b-2 " :"" }`}>Usuarios</div>
        </Link>
      </div>
      <div>
        {tab === TabView.HASHTAGS && <MessageHashtagList initialPage={hashtags} />}
        {tab === TabView.USERS && <UserList initialUserPage={users} />}
      </div>
    </>
  );
};

export default ExploreTabs;
