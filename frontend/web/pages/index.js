
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import SearchBox from "../components/layouts/search_box"

// import { getAllPostsData } from '../lib/posts'; //関数はこのような表記？

export default function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    try {
      fetch("http://0.0.0.0:8000/api/post")
        .then(res => res.json())
        .then(resDatas => {
          setDatas(resDatas)
        })
    } catch (e) {
      console.log('エラーです。', e);
    }
  }, [])

  return (
    <div>
      <Head>
        <title>
          Qikoo
        </title>
      </Head>
      <SearchBox />
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <p class="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">Recent Questions</p>

          <h2 class="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">最新の質問一覧</h2>
          <ul>
            {datas && datas.map(data => (
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