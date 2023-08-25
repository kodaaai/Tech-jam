import Link from 'next/link'

const Navigation = () => {
    return (
        <div>
            <header className="flex items-center justify-between py-4 md:py-8">
                <Link href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl">
                <a className="inline-flex items-center gap-2.5 text-2xl font-bold text-indigo-500 md:text-3xl" aria-label="logo">Qikoo</a>
                </Link>
                 <nav className="hidden gap-12 lg:flex">
                    <Link href="/">
                        <a className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">ホーム</a>
                    </Link>
                    <Link href="/posts/new">
                        <a className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">質問を投稿する</a>
                    </Link>
                    <Link href="http://0.0.0.0:8000/user/login/">
                        <a className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">ログイン</a>
                    </Link>
                    <Link href="http://0.0.0.0:8000/user/logout/">
                        <a className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">ログアウト</a>
                    </Link>
                </nav>
            </header> 
        </div>
    )
};

export default Navigation;