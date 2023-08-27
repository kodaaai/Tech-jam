
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link';

// import { getAllPostsData } from '../lib/posts'; //関数はこのような表記？

export default function Home() {
  const [inputValue, setInputValue] = useState("");// 文字列型
  const [datas, setDatas] = useState([]);// 変数とこの変数を更新するための関数を宣言している。初期値はなしの空の配列。
  let [filteredDatas, setFilterdDatas] = useState([]);

  useEffect(() => {
    try {
      fetch("http://0.0.0.0:8000/api/post")// djangoから渡ってきた値をフェッチ
        .then(res => res.json())// jsonに変換
        .then(resDatas => {
          setDatas(resDatas)// 変換されたデータをDatasに格納している
          setFilterdDatas(resDatas)
        })
    } catch (e) {
      console.log('エラーです。', e);
    }
  }, [])//[]はこちらの処理が一度だけ

  const search = (value) => { // inputValue : Stringが渡ってくる
    if (value !== "") {
      const filteredList = datas.filter((data) => //データを一つ一つフィルタリングしている。
        Object.values(data).some(
          (item) =>
            `${item}`.toUpperCase().indexOf(value.trim().toUpperCase()) !== -1
        )
      );
      setFilterdDatas(filteredList);
      return;
    }
    setFilterdDatas(datas);
    return;
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>
          Qikoo
        </title>
      </Head>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
                <p class="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">Qikoo</p>
                <div class="mb-3">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">困ったことはQikooに聞こう！</h2>
                    <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                        value={inputValue}
                        onChange={handleChange}
                        type="search"
                        class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                        <span
                        class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                            fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd" />
                        </svg>
                        </span>
                    </div>
                </div>

                <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Qikooは社内向けのQ&A掲示板アプリです。知識共有を促進し、効率的な情報交換を支援するプラットフォームを目指します。</p>
                </div>
            </div>
        </div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <p class="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">Recent Questions</p>
          <h2 class="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">質問一覧</h2>
          <ul>
            {filteredDatas && filteredDatas.map(data => ( //dataが一つ以上の場合に処理をぶん回している。
              <li key={data.id}>
                <Link href={`/posts/${data.id}`}> 
                  <p className='max-w-screen-md text-gray-500 md:text-lg'>{`◉ ${data.created_at} : ${data.title}`}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
