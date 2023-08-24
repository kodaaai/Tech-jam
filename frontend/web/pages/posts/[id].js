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
        </div>
    );
};

export default Post;