import Image from "next/image";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Navigation from "./(site)/components/menu/Menu";
import LastArticles from "./(site)/Home/components/LastArticles";
import { fnFetchSsr, IetchProps } from "@/lib/fnFetchSsr";
import FetchError from "./components/Tab/DataFetchComponents/FetchError";
import DataEmpty from "./components/Tab/DataFetchComponents/DataEmpty";
import DataFetchLayout from "./components/Tab/DataFetchComponents/DataFetchLayout";

export type ArticlesDetai = {
  id: number,
  title: string,
  content: string,
  thumbnail: string, date: string, userName: string, userEmail: string, userId: number, summary?: string
}

interface HomeProps {
  lastArticleData: ArticlesDetai[];
}
export default async function Home() {
  const payload: IetchProps = {
    url: `${process.env.BASE_URL}/articles/getAll`,
    method: 'GET',

  };
  const lastArticleData = await fnFetchSsr(payload);

  return (
    <div className="">
      <Navigation />
      <div className="container mx-auto p-4">
        <DataFetchLayout data={lastArticleData} error={lastArticleData?.error ? true : false} >
          <h1 className="text-3xl p-4 font-bold"> آخرین مقالات </h1>
          <div className='flex  items-center gap-2'>
            {lastArticleData?.data?.map((article: ArticlesDetai, i) => {
              return (
                <div className="w-1/4 mx-1 h-[30rem]" key={`article-${article?.id}-${article?.date}`}> <LastArticles detail={article} />
                </div>

              )
            })}

          </div>
        </DataFetchLayout>
      </div>


    </div>
  );
}
