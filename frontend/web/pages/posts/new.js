import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const CreatePost = () => {
    const [user, setUser]=useState()
    function submitpost() {
        try {
            const obj = {
                user : 1,
                title : "新しいデータ",
                body : "body",
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
                <input type="text" id="user" />

                <label htmlFor="title">タイトル</label>
                <input type="text" id="title" />

                <label htmlFor="content">内容</label>
                <textarea id="content"></textarea>
            </form> 
            <button onClick={submitpost}>送信する</button>
        </div>
    );
};
export default CreatePost;