import { TrendingUserType, UserType } from "@/types/user.types";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

enum UserCardLayout {
  HORIZONTAL,
  VERTICAL,
}
const divClasses = {
  [UserCardLayout.HORIZONTAL]: "flex",
  [UserCardLayout.VERTICAL]: "flex flex-col",
};
type UserCardProps = PropsWithChildren & {
  user: TrendingUserType | UserType;
};

const UserCard = ({ user, children }: UserCardProps) => {
  return (
    <div className=" ">
      <div className="flex gap-4  ">
        <div className="flex flex-col  justify-center">
          <div>
            <div className="rounded-full   text-center">
              <Image
                priority
                className=" rounded-full"
                src={user.photoUrl}
                width={60}
                height={40}
                alt={user.name}
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-left text-white">{user.name}</h3>
            <div className="text-md  text-gray-200 cursor-pointer">
              @<Link href={`/users/${user.username}`}>{user.username}</Link>
            </div>
          </div>
      </div>
        {children}
        </div>
    </div>
  );
};

export default UserCard;
