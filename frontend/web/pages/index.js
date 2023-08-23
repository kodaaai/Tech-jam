
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link';

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
      <div className='flex flex-wrap -m-4 mb-5'>
        <div className='text-lg mb-3'>質問一覧</div>
      </div>

      <ul>
        {datas && datas.map(data => (
          <li key={data.id}>
            <Link href={`/posts/${data.id}`}> 
              <p>{`◉ ${data.title}`}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}