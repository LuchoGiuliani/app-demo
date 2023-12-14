
import MessageFeed from "@/components/messages/MessageFeed";
import MessagePostForm from "@/components/messages/MessagePostForm";
import SearchBar from "@/components/search/SearchBar";
import messageApi from "@/services/messages/messages.service";
import IndexPageContainer from "./page.container";


const IndexPage = async ({searchParams}: {searchParams?: {[key:string]:string | undefined}}) => {



  const messageResponse =
  searchParams?.query ?
   await messageApi.getMessagesByHash(searchParams?.query, 0 , 10) :
   await messageApi.getMessageFeed(0, 10);

  return (
    <>
      <main className="flex flex-col bg-gray-800 p-8">
        <section className="flex flex-col mb-8">
          <IndexPageContainer initialQuery={searchParams?.query} messageResponse={messageResponse} />
        </section>
      </main>
    </>
  );
};

export default IndexPage;
