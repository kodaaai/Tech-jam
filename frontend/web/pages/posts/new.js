import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'


const CreatePost = () => {
    const router= useRouter();
    const [user, setUser]=useState();
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState(
        '・やりたいこと・実行環境・エラー概要・試したこと');

    function SubmitPost() {
        try {
            const obj = {
                user : 1,
                title : String(title),
                body : String(question),
                status : 0,
                tags : [1],
            };
            const method = "POST";
            const headers = {
                'Content-Type': 'application/json'
                };
            const body = JSON.stringify(obj);
            
            fetch("http://0.0.0.0:8000/api/post/new", {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);
            router.push("/");
        } catch (e) {
            console.log('エラーです:', e);
        }
    };
    return (
        <div>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <p class="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">Post Question</p>
                        <h2 class="mb-4 text-2xl font-bold text-gray-800 md:mb-1 lg:text-3xl">質問投稿</h2>
                    </div>
                </div>
                <form>
                    <div class="mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-gray-600">タイトル</label>
                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm text-gray-600">質問内容</label>
                                    <textarea id="message" name="message" value={question} onChange={(e) => setQuestion(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                    <button onClick={SubmitPost} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">質問する</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default CreatePost;