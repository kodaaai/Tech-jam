import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts";

//下記のコードはエラーが発生する
// if (router.isFallback || !post) {
//     return (
//         <div>Loading...</div>
//         );
// }

export default function PostData({post}){
    const router = useRouter();
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.status}</p>
            <p>{post.tags}</p>
            <p>{post.created_at}</p>
            <p>{post.updated_at}</p>
        </div>
    )
};

// 投稿一覧のIDを取得
export async function getStaticPaths(){
    const paths=await getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}


// 投稿詳細のデータを取得
export async function getStaticProps({params}){
    const post = await getPostData(params.id)
    return {
        props: {
            post,
        },
        revalidate:3,
    };
}