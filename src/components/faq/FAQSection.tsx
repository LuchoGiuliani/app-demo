import Link from "next/link";
import FAQCard from "./FAQCard";
import { FAQPageType } from "@/types/faq.types";

type FAQSectionProps = {
 sections: FAQPageType[]
};

const FAQSection = ({sections}: FAQSectionProps) => {
  return (
    <section className="bg-slate-800 h-screen">
      <h1 className="text-white font-semibold text-2xl">Preguntas frecuentes</h1>
      <div className="grid grid-cols-12 gap-4">
        {sections.map(section =>  <FAQCard key={section.attributes.slug} label={section.attributes.title} href={`/faq${section.attributes.slug}`}/>)}

      </div>
    </section>
  );
};

export default FAQSection;
