import { TrendingUserType, UserType } from "@/types/user.types";

import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";

import { TrendingHashTag } from "@/types/hash.types";
import HttpInternalApi from "../common/http.internal.service";

class ExploreAPI {
  getTrendingHashtags = async (page: number, size: number): Promise<TrendingHashTag> =>
    HttpInternalApi.httpGetPublic(
      `/explore/trending`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
  getFollowRecommendations = async (page: number, size: number): Promise<TrendingUserType> =>
  HttpInternalApi.httpGetPublic(
      `/explore/follow-recommendations`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
  
}

const exploreApi = new ExploreAPI();
export default exploreApi;
