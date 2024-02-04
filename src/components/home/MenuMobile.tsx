import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@assets/scss/home.module.scss'
import logo2 from '@assets/images/logo-black.svg'
import Script from 'next/script'

const MenuMobile = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='lg:hidden'>

            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image alt='' width={80} height={80} src={logo2} />
                    </a>
                </div>

                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 text-2xl"
                    onClick={() => {
                        setOpen(true)
                    }
                    }
                >
                    <span className="sr-only">Open main menu</span>
                    <i className="fa fa-bars text-white "></i>
                </button>
            </nav>

            <div className={`relative z-20  `} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className={`fixed inset-0 bg-slate-950 bg-opacity-75 transition-opacity ${open ? '' : 'hidden'} `}></div>
                <div className={` inset-0 overflow-hidden  ${open ? 'fixed' : ''}`}>
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pe-10">
                            <div className={`pointer-events-auto relative w-screen transform  ease-in-out transition-transform duration-300 max-w-sm ${open ? '' : '-translate-x-full'}`}>

                                <div className="flex bg-sidebar h-full flex-col overflow-y-auto py-6 shadow-xl">
                                    <div className="px-4 flex justify-between items-center mx-6 border-b-2 border-neutral-50">
                                        <Image alt='' src={logo2} width={100} height={100} />
                                        <button onClick={() => {
                                            setOpen(false)
                                        }}
                                            type="button" className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                            <span className="absolute -inset-2.5"></span>
                                            <span className="sr-only">Close panel</span>
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={`relative mt-6 flex-1 px-4 sm:px-6 ${styles.sidebar}`}>
                                        <ul>
                                            <li>
                                                <Link href={'/'}>Trang chủ</Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>Sản phẩm</Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>Dịch vụ</Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>Về chúng tôi</Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>Tin tức</Link>
                                            </li>
                                            <li>
                                                <Link href={'/'}>Liên hệ</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Script id="show-banner">
                {open && `
                var body = document.body;
                console.log('body', body);
                body.classList.add('overflow-hidden');
                `}
            </Script>
        </div >
    )
}

export default MenuMobile
