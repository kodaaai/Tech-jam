import Navigation from "./navigation.js" //navのコンポーネント

export default function Layout(props) { //props=プロパティ。ここでオブジェクトを受け取り、returnの中身で{props.name}とかで呼び出せる
    return ( //こちらでレイアウトを記述している
        <div className="flex flex-col min-h-screen">
            <Navigation /> 
            <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
                {props.children}
            </main>
            <footer className="flex items-center justify-center w-full h-20 text-sm border-t">
                ©︎ 2023 Qikoo
            </footer>
        </div>
    )
}