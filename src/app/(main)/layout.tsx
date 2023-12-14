import ExploreTrending from "@/components/explore/ExploreTrending";
import ExploreUsers from "@/components/explore/ExploreUsers";
import Menu from "@/components/menu/Menu";
import exploreApi from "@/services/explore/explore.service";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import logo from "../../../public/logo.png"

const LINKS = [
  { title: "Inicio", href: "/" },
  { title: "Explorar", href: "/explore" },
  { title: "Perfil", href: "/profile" },
];

const UsersLayout: FC<PropsWithChildren> = async ({ children }) => {
  const hashesPromise = exploreApi.getTrendingHashtags(0, 3);
  const usersPromise = exploreApi.getFollowRecommendations(0, 5);

  const [hashes, users] = await Promise.all([hashesPromise, usersPromise]);

  return (
    <>
    <div className="bg-gray-900  flex  items-center justify-center border-b ">
        <Image
            priority
            className="rounded-full "
            src={logo}
            width={60}
            height={60}
            alt="Anakin"
          />
        
    </div>
      <div className="grid grid-cols-12 w-full h-full gap-2 bg-gray-900 ">
        <div className="col-span-2 text-white border-x-2">
          <Menu links={LINKS} />
        </div>
        <main className="col-span-6 text-white">{children}</main>
        <div className="col-span-3 border-x-2">
          <ExploreTrending hashes={hashes.content} />
          <ExploreUsers users={users.content} />
        </div>
        <Link href="/faq">
          <div className="font-semibold text-white">Preguntas frecuentes</div>
        </Link>
      </div>
    </>
  );
};
export default UsersLayout;
