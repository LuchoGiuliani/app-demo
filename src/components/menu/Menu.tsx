import { LinkType } from "@/types/link.types";
import Link from "next/link";

type MenuProps = {
  links: LinkType[];
};

const Menu = ({ links }: MenuProps) => {
  return (
    <nav className="flex flex-col ">
      <ul className="mb-4 w-full" >
        {links &&
          links.map((link, index) => (
            <li key={`menu-link-${index}`} className="text-2xl pb-2 w-full">
              <Link
                className="p-2 w-full flex text-white hover:bg-blue-400 hover:text-slate-200"
                href={link.href}
              >
               {link.title}
              </Link>{" "}
            </li>
          ))}
      </ul>
      <button className="button-primary mx-2 ">Postear</button>
    </nav>
  );
};

export default Menu;
