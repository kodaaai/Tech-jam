import React, { useState, useEffect } from 'react'

const CreatePost = () => {
    const [user, setUser]=useState()
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');

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

        } catch (e) {
            console.log('エラーです:', e);
        }
    };
    return (
        <div>
            <form>
                <label htmlFor="user">ユーザー</label>
                <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} />

                <label htmlFor="title">タイトル</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="content">内容</label>
                <textarea id="content" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
            </form>
            <button onClick={SubmitPost}>送信する</button>
        </div>
    );
};
export default CreatePost;