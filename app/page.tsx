import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { error } from "console";
import { cookies } from "next/headers";





export default async function Home() {

  // クライアントコンポーネントを使いたい場合は、"use client"とすると使えないわけではないっぽい。
  // なぜサーバーコンポーネントを使うかというとデータ取得が早くなるからとのこと。
  // というかそもそもcookiesってなに？
  const supabase = createServerComponentClient({ cookies });
  const { data: lessons } = await supabase.from("lesson").select("*");

  console.log(lessons);
  console.log(error);
  


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>Hi, My name is Kazuki ! </div>
      </main>
    </div>
  );


}





