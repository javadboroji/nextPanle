import Image from "next/image";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Navigation from "./(site)/components/menu/Menu";
import LastArticles from "./(site)/Home/components/LastArticles";
import { fnFetchSsr, IetchProps } from "@/lib/fnFetchSsr";

export type ArticlesDetai = {
  id: number,
  title: string,
  content: string,
  thumbnail: string, date: string, userName: string, userEmail: string, userId: number
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
  console.log(lastArticleData, 'lastArticleData****');

  return (
    <div className="">
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl p-4 font-bold"> آخرین مقالات </h1>
        <div className='flex  items-center gap-2'>
          {lastArticleData?.data?.map((article: ArticlesDetai, i) => {
            return (
              <div className="w-1/4 mx-1" key={`article-${article?.id}-${article?.date}`}> <LastArticles detail={article} />
              </div>
            )
          })}

        </div>
      </div>


    </div>
  );
}
