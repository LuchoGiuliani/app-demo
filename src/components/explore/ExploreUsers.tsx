import Link from "next/link";
import PostCounter from "../counters/PostsCounter";
import { TrendingHashTag } from "@/types/hash.types";
import { TrendingUserType } from "@/types/user.types";
import Image from "next/image";
import UserCard from "../users/UserCard";


type ExploreUsersProps = {
  users: TrendingUserType[];
};

const ExploreUsers = ({ users }: ExploreUsersProps) => {
  if (!users || users.length === 0) return <></>;
  return (
    <>
      <div className="bg-slate-800 rounded-lg p-4 m-2">
        <h2 className="mb-2 text-white">A quien seguir </h2>
        {users &&
          users.slice(0,4).map((user, index) => (
            <UserCard user={user} key={`trending-user-${index}`} />
           
          ))}
        {users.length > 4 && 
        <Link href="/explore?type=USERS">
        <div className="text-center link-primary">Ver Mas</div>
        </Link>
        }
      </div>
    </>
  );
};
export default ExploreUsers;
