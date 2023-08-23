import Link from "next/link"

const Post = ({post}) => {
    return(
        <div>
            
            <span>{post.id}</span>
            {":"}
            <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
            </Link>
        </div>
    );
};