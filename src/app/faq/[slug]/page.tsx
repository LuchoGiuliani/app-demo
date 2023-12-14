import FAQCard from "@/components/faq/FAQCard";
import FAQSection from "@/components/faq/FAQsection";
import faqsApi from "@/services/faqs/faqs.service";
import Link from "next/link";

export default async function FAQPage({params}:{params:{slug:string}}) {
  const faqPages = await faqsApi.getFAQPages();
  const faqPage = faqPages.data.find(page => page.attributes.slug === `/${params.slug}`);

  


  return (
    <main>
      <FAQSection sections={faqPages.data} />
      <section>
        <h1>{faqPage?.attributes.title}</h1>
        <div>{JSON.stringify(faqPage?.attributes.body)}</div>

      </section>
    </main>
  );
}
