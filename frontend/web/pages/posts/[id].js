import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const [body, setBody] = useState("");
    const [data, setData] = useState([]);
    const [status, setStatus] = useState([]);
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        try {
            fetch(`http://0.0.0.0:8000/api/post/${id}`)
                .then(res => {
                    setStatus(res.status);
                    return res.json()
                })
                .then(resData => {
                    setData(resData)
                })
        } catch (e) {
            console.log('エラーです:', e);
        }
    }, [id])


    if (status == 404) return <div>データがありません...</div>;
    if (status > 500) return <div>エラーです</div>;

    const SubmitPost = () => {
        try {
            const obj = {
                user : 1,
                question : parseInt(id),
                body : String(answer),
            };
            const method = "POST";
            const headers = {
                'Content-Type': 'application/json'
                };
            const body = JSON.stringify(obj);
            
            fetch(`http://0.0.0.0:8000/api/post/${id}/create`, {method, headers, body}).then((res)=> res.json()).catch(console.error);
            router.reload();

        } catch (e) {
            console.log('エラーです:', e);
        }
    };
    return (
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col mb-3 pr-0 w-full md:w-auto md:text-left text-center border-b-2">
                <h2 class="mb-1 font-semibold text-indigo-500 md:mb-3 lg:text-lg">Question</h2>
                <h1 class="md:text-3xl text-2xl font-medium mb-3 title-font text-gray-900 ">{data.title}</h1>
                <p class="md:text-l text-l text-right font-medium font-bold text-gray-600 mb-3">タグ： {data.tags}</p>
            </div>
            <div class="flex flex-col  md:mb-0 pb-3 pr-0 w-full md:w-auto md:text-left text-center mb-5">
                <p class="md:text-l text-l text-right font-medium font-bold text-gray-600 mb-2">投稿日時：{data.created_at}    更新日時：{data.updated_at}</p>
                <p class="md:text-l text-l text-left font-medium text-gray-600 mb-2">質問内容：</p>
                <p class="md:text-xl text-xl font-medium font-bold text-gray-700 w-full whitespace-pre-wrap border-2 p-3">{data.body}</p>
            </div>
            <p class="mt-3 mb-1 font-semibold text-indigo-500 md:mb-3 lg:text-lg">Answers</p>
            <div className='mb-1 border-b-2'>
                <h2 class=" text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">回答一覧</h2>
            </div>
            <div className="mb-2">
                {data.answers && data.answers.map(answers => ( //dataが一つ以上の場合に処理をぶん回している。
                    <p className='max-w-screen-md text-gray-800 md:text-lg mt-3'>{`◉ ${answers}`}</p>
                ))}
            </div>
            <div class="flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow w-full">
                    <form>
                        <textarea id="message" name="message" rows="1" value={answer} onChange={(e) => setAnswer(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </form>
                </div>
            </div>
            <div class="p-2 w-full py-2">
                <button onClick={SubmitPost} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-md">回答を追加する</button>
            </div>
        </div>
    );
};

export default Post;

{/* <label htmlFor="content">内容</label>
<textarea id="content" value={answer} onChange={(e) => setAnswer(e.target.value)} ></textarea> */}