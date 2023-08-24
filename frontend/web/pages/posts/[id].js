import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    const [data, setData] = useState([]);
    const [status, setStatus] = useState([]);

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

    function submitpost() {
        try {
            const obj = {
                user : 1,
                question : { id },
                body : "body",
            };
            const method = "POST";
            const headers = {
                'Content-Type': 'application/json'
                };
            const body = JSON.stringify(obj);
            
            fetch("http://0.0.0.0:8000/api/post/new", {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);

        } catch (e) {
            console.log('エラーです:', e);
        }
    };
    return (
        <div>
            <h1>Post: {id}</h1>
            <p>{data.title}</p>
            <p>{data.body}</p>
            <p>{data.user}</p>
            <p>{data.status}</p>
            <p>{data.tags}</p>
            <p>{data.created_at}</p>
            <p>{data.updated_at}</p>
            <form>
                 <label htmlFor="user">ユーザー</label>
                 <input type="text" id="user" />

                 <label htmlFor="title">タイトル</label>
                 <input type="text" id="title" />

                 <label htmlFor="content">内容</label>
                 <textarea id="content"></textarea>
             </form> 
             <button onClick={submitpost}>送信する</button>
             {data.answers && data.answers.map(answers => ( //dataが一つ以上の場合に処理をぶん回している。
                  <p className='max-w-screen-md text-gray-500 md:text-lg'>{`◉ ${answers}`}</p>
             ))}
        </div>
    );
};

export default Post;