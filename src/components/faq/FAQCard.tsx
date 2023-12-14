import Link from "next/link";

type FAQCardType = {
  label: string;
  href: string;
};

const FAQCard = ({label,href}: FAQCardType) => {
  return (
    <Link href={href} className="col-span-3">
     <div className="cursor-pointer rounded-lg border border-gray-200 p-4">
            <h3 className="text-white">{label}</h3>
        </div>
    </Link>
  );
};

export default FAQCard;
