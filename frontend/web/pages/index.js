import Head from 'next/head'
import Post from '../components/posts/posts';
import { getAllPostsData } from '../lib/posts'; //関数はこのような表記？

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Qikoo
        </title>
      </Head>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className='flex flex-wrap -m-4 mb-5'>
        <div className='text-lg mb-3'>質問一覧</div>
      </div>
      <p className='flex flex-wrap -m-4 mb-5'>
        {posts && posts.map((post) => <Post key={post.id} post={post}/>)} 
      </p>
    </div>
  )
}

//この処理はlibで渡ってきたデータをフロントに辞書形式で渡している処理。
export async function getStaticProps(){
  const posts = await getAllPostsData(); //これはlibの方の関数でURLからデータをバックエンドから確保し、Jsonファイルに置き換え、渡す処理
  return {
    props:{ posts },
  };
}