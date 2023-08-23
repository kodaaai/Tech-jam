
export default function SearchBox() {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
                <p class="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">Qikoo</p>
                <div class="mb-3">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">困ったことはQikooに聞こう！</h2>
                    <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                        type="search"
                        class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                        <span
                        class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                            fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd" />
                        </svg>
                        </span>
                    </div>
                </div>

                <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Qikooは社内向けのQ&A掲示板アプリです。知識共有を促進し、効率的な情報交換を支援するプラットフォームを目指します。</p>
                </div>
            </div>
        </div>
        
    )}