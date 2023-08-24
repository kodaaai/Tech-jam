import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';




const CreatePost = () => {
    const router = useRouter();
    const { id } = router.query;
    
    const [data, setData] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        try {
            const obj = {
                user : 1,
                title :"通信テスト",
                body:"テスト",
                status:0,
                tags:1,
            };
            const method = "POST";
            const headers = {
                'Content-Type': 'application/json'
                };
            const body = JSON.stringify(obj);
            
            fetch("http://0.0.0.0:8000/api/post/new/", {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);

        } catch (e) {
            console.log('エラーです:', e);
        }
    }, [id])


    if (status == 404) return <div>データがありません...</div>;
    if (status > 500) return <div>エラーです</div>;

    return (
        <div>    
            <form>
                <label>タイトル</label>
                <input></input>
            </form>
        </div>
    );
};

export default CreatePost;