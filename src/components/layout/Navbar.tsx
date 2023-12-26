"use client"
import authApi from "@/services/auth/auth.api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../../public/logo.png"
type NavbarProps = {
  loggedUsername?: string
}



const Navbar = ({loggedUsername}: NavbarProps) => {
    
    const router = useRouter();

    const logout = async () => {
      await authApi.logout();
      router.push("/login")
      router.refresh();
    }

    return <header className="w-full">
    <nav className="flex justify-between w-full bg-slate-800 border-b text-white p-2 ">
      <Link href="/explore">
        <div className="px-4 py-1">
        <Image
              priority
              className=" rounded-full"
              src={logo}
              width={60}
              height={40}
              alt="logo"
            />
        </div>
      </Link>
      { loggedUsername && <div>
        <button className="button-secondary" onClick={() => logout()}>
          Cerrar sesión
        </button>
      </div>
      }
    </nav>
  </header>
}

export default Navbar;