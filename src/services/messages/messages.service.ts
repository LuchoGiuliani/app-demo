import { UserType } from "@/types/user.types";

import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";
import HttpInternalApi from "../common/http.internal.service";

class MessageAPI {
  getMessageFeed = async (
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
  HttpInternalApi.httpGetPublic(
      `/messages/feed`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
  getMessage = async (id: string): Promise<MessageType> =>
  HttpInternalApi.httpGetPublic(`/messages/${id}`);
  getMessageReplies = async (
    id: string,
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
  HttpInternalApi.httpGetPublic(
      `/messages/${id}/replies`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
  postMessage = async (message: string, parentId?: string): Promise<MessageType> =>
  HttpInternalApi.httpPost(`/messages`, { message: message, parentId: parentId ?? null});

    getMessagesByHash = async (
      hashtag:string,
      page: number,
      size: number
    ): Promise<PageType<MessageType>> =>
    HttpInternalApi.httpGetPublic(
        `/messages/hash/${hashtag}`,
        new URLSearchParams({ page: `${page}`, size: `${size}` })
      );
}

const messageApi = new MessageAPI();
export default messageApi;
