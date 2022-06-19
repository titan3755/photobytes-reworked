import { Fragment } from 'react'
import Link from 'next/link'

export default function Footer () {
    return (
        <Fragment>
            <div>
                <footer id="footer" className="relative z-50">
                    <div className=" border-t border-b border-gray-200 py-16">
                        <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                            <div className="lg:flex">
                                <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                                    <div className="w-full lg:w-1/2 px-6">
                                        <ul>
                                            <li>
                                                <Link href="https://www.facebook.com/PhotoBytes999">
                                                    <a className="text-xs lg:text-sm leading-none hover:text-brand :hover:text-brand text-gray-800 :text-gray-50">Pricing</a>
                                                </Link>
                                            </li>
                                            <li className="mt-6">
                                                <Link href="/about">
                                                    <a className="text-xs lg:text-sm leading-none hover:text-brand :hover:text-brand text-gray-800 :text-gray-50">FAQ</a>
                                                </Link>
                                            </li>
                                            <li className="mt-6">
                                                <a href="" className="text-xs lg:text-sm leading-none hover:text-brand :hover:text-brand text-gray-800 :text-gray-50">
                                                    Documentation
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-6">
                                        <ul>
                                            <li>
                                                <Link href="/contact">
                                                    <a className="text-xs lg:text-sm leading-none hover:text-brand :hover:text-brand text-gray-800 :text-gray-50">Contact</a>
                                                </Link>
                                            </li>
                                            <li className="mt-6">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand :hover:text-brand text-gray-800 :text-gray-50" target="_blank" href="https://www.facebook.com/groups/photobytes" rel="noopenner noreferrer">Blog</a>
                                            </li>
                                            <li className="mt-6">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand :hover:text-brand text-gray-800 :text-gray-50" target="_blank" href="https://www.facebook.com/PhotoBytes999" rel="noopenner noreferrer">PBS News</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 flex">
                                    <div className="w-full lg:w-1/2 px-6">
                                        <ul>
                                            <li>
                                                <Link href="/privacy">
                                                    <a className="text-xs lg:text-sm leading-none hover:text-brand :hover:text-brand text-gray-800 :text-gray-50">
                                                        Privacy policy
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="mt-6">
                                                <Link href="/privacy">
                                                    <a className="text-xs lg:text-sm leading-none hover:text-brand :hover:text-brand text-gray-800 :text-gray-50">Terms of service</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                                        <div className="flex items-center mb-6">
                                            <a href="https://github.com/titan3755" target="_blank" rel="noopener noreferrer">
                                                <div className="text-gray-800 :text-gray-50 cursor-pointer hover:text-brand :hover:text-brand ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-rose-500 bi bi-github" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://www.facebook.com/PhotoBytes999" target="_blank" rel="noopener noreferrer">
                                                <div className="pl-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-rose-500 bi bi-facebook" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="https://www.facebook.com/PhotoBytes999" target="_blank" rel="noopener noreferrer">
                                                <div className="pl-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-rose-500 bi bi-whatsapp" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-16 flex flex-col justify-center items-center">
                        <Link href="/">
                            <a>
                                <img
                                    className="min-h-[60px] text-center sm:h-10 bg-black rounded-full p-0.5"
                                    src="./final.svg"
                                    alt=""
                                />
                            </a>
                        </Link>
                        <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 :text-gray-50">2022 Photobytes Studios©️. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </Fragment>
    )
}