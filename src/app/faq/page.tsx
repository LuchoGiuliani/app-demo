import FAQCard from "@/components/faq/FAQCard";
import FAQSection from "@/components/faq/FAQsection";
import faqsApi from "@/services/faqs/faqs.service";
import Link from "next/link";

export default async function FAQPage() {
  const faqPages = await faqsApi.getFAQPages()
  return (
    <main>
      <FAQSection sections={faqPages.data}/>
    </main>
  );
}
