import { TrendingUserType, UserType } from "@/types/user.types";

import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { URLSearchParams } from "url";
import { TrendingHashTag } from "@/types/hash.types";
import { StrapiResultType } from "@/types/strapi.types";
import { FAQPageType } from "@/types/faq.types";
import { strapiGet } from "../common/strapi.service";

class FAQsAPI {
  getFAQPages = async (): Promise<StrapiResultType<FAQPageType>> => strapiGet(`/faq-pages`);
 
  
}

const faqsApi = new FAQsAPI();
export default faqsApi;
