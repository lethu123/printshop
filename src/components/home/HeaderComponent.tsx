'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import icPhone from '@assets/images/phone.svg'
import location from '@assets/images/loaction.svg'
import flagVN from '@assets/images/vietnam.png'
import flagUK from '@assets/images/UK.png'
import Container from '@srccommons/Container'
import { useTranslation } from 'react-i18next'
import Translations from '@srccommons/Translations'

const HeaderComponent = () => {
    const { i18n } = useTranslation()

    const handleLangItemClick = (lang: 'en' | 'vi') => {
        i18n.changeLanguage(lang)
    }

    // ** Change html `lang` attribute when changing locale
    useEffect(() => {
        document.documentElement.setAttribute('lang', i18n.language)
    }, [i18n.language])

    return (
        <div className='bg-header1' >
            <Container >
                <div className='flex lg:justify-around justify-between items-center py-[9px] flex-wrap sm:px-6' >
                    <div className='items-center hidden md:flex'>
                        <Image style={{ width: 20, height: 20 }} alt='' src={location} />
                        <span className="text-white ml-2 font-semibold text-[16.5px]">
                            <Translations text='66/52 Phổ Quang, P.2,' />
                            <br className="sm:hidden" /> {' '}
                            <Translations text="Q. Tân Bình, TP. Hồ Chí Minh" />
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <Image style={{ width: 20, height: 20 }} alt='' src={icPhone} />
                        <span className="text-white ml-2 font-semibold text-[16.5px]">(+84) 28 3844 1111</span>
                    </div>
                    <div className='flex items-center flex-wrap'>
                        <div onClick={() => handleLangItemClick('vi')} className='cursor-pointer font-semibold flex items-center mr-3'> <Image style={{ width: 20, height: 20 }} alt='' src={flagVN} /> <span className="text-white ml-2 hidden sm:inline-block text-[15px]"> <Translations text='Tiếng Việt' /></span> </div>
                        <div onClick={() => handleLangItemClick('en')} className='cursor-pointer font-semibold flex items-center'> <Image style={{ width: 20, height: 20 }} alt='' src={flagUK} /> <span className="text-white ml-2 hidden sm:inline-block text-[15px]"><Translations text='Tiếng Anh' /></span> </div>
                    </div>
                    <div className='items-center md:hidden flex'>
                        <Image style={{ width: 20, height: 20 }} alt='' src={location} />
                        <span className="text-white ml-2 font-semibold text-[15px] sm:text-[16.5px]">
                            <Translations text='66/52 Phổ Quang, P.2,' />
                            <br className="sm:hidden" /> {' '}
                            <Translations text="Q. Tân Bình, TP. Hồ Chí Minh" />
                        </span>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default HeaderComponent
