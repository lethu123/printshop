import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@assets/scss/home.module.scss'
import logo2 from '@assets/images/logo-black.svg'
import flagVN from '@assets/images/vietnam.png'
import flagUK from '@assets/images/UK.png'

const menu = [
    {
        title: 'Trang chủ',
        path: '/'
    },
    {
        title: 'Sản phẩm',
        path: '/',
        subMenu: [
            {
                title: 'Sản phẩm 1',
                path: '/'
            },
            {
                title: 'Sản phẩm 2',
                path: '/'
            },
            {
                title: 'Sản phẩm 3',
                path: '/'
            },
            {
                title: 'Sản phẩm 4',
                path: '/'
            },
        ]
    },
    {
        title: 'Dịch vụ',
        path: '/',
        subMenu: [
            {
                title: 'Dịch vụ 1',
                path: '/'
            },
            {
                title: 'Dịch vụ 2',
                path: '/'
            },
            {
                title: 'Dịch vụ 3',
                path: '/'
            },
            {
                title: 'Dịch vụ 4',
                path: '/'
            },
        ]
    },
    {
        title: 'Về chúng tôi',
        path: '/'
    },
    {
        title: 'Tin tức',
        path: '/'
    },
    {
        title: ' Liên hệ',
        path: '/'
    },
    {
        title: 'Tiếng anh',
        path: '/',
        icon: flagVN
    },
    {
        title: 'Tiếng việt',
        path: '/',
        icon: flagUK
    },
]
const MenuMobile = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={`${styles.mobile_menu} lg:hidden relative`}>

            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image alt='' width={80} height={80} src={logo2} />
                    </a>
                </div>

                <button
                    id='btn-open'
                    type="button"
                    className="-m-2.5 border inline-flex items-center justify-center rounded-md py-2 px-3 text-gray-700 text-2xl"
                    onClick={() => {
                        setOpen(!open)
                    }
                    }
                >
                    <span className="sr-only">Open main menu</span>
                    <i className="fa fa-bars text-white "></i>
                </button>

            </nav>
            <div className={`${open ? styles.menu_show : styles.menu_hidden} overflow-hidden  absolute top-16  w-full z-10`}>
                <div className={`device-x bg-white rounded-md   mx-6 p-2  shadow-lg ring-1 ring-gray-900/5 h-full ${styles.sidebar}`}>

                    {menu.map((it, index) => {
                        if (it.subMenu) {
                            return <div key={it.title} className={`${index != menu.length - 1 ? 'border-b' : ''}`} >
                                <h3 className="px-5 text-nowrap  p-3 font-semibold text-gray-900 ">{it.title}</h3>
                                <div className='ms-7'>
                                    {it.subMenu.map((i, idx) => (<Link onClick={() => setOpen(!open)} key={i.title} href={i.path} className={`${idx != it.subMenu.length - 1 ? 'border-b' : ''} flex  items-center px-5 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100`}>
                                        {i.title}
                                    </Link>))}
                                </div>
                            </div>
                        }
                        return <Link onClick={() => setOpen(!open)} key={it.title} href={it.path} className={`${index != menu.length - 1 ? 'border-b' : ''} flex  items-center px-5 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100`}>
                            {it.icon && <Image style={{ width: 20, height: 20 }} alt='' src={it.icon} />}  {it.title}
                        </Link>
                    })}
                </div>
            </div>

        </div >
    )
}

export default MenuMobile
