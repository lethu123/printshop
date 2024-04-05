import Image from 'next/image'
import React from 'react'
import icPhone from '@assets/images/phone.svg'
import location from '@assets/images/loaction.svg'
import flagVN from '@assets/images/vietnam.png'
import flagUK from '@assets/images/UK.png'
import Container from '@srccommons/Container'

const HeaderComponent = () => {
    return (
        <div className='bg-header1' >
            <Container >
                <div className='flex lg:justify-around justify-between items-center py-[9px] flex-wrap px-6' >
                    <div className='items-center hidden md:flex'>
                        <Image style={{ width: 20, height: 20 }} alt='' src={location} />
                        <span className="text-white ml-2 text-[16.5px]">66/52 Phổ Quang, P.2, Q. Tân Bình, TP. Hồ Chí Minh</span>
                    </div>
                    <div className='flex items-center'>
                        <Image style={{ width: 20, height: 20 }} alt='' src={icPhone} />
                        <span className="text-white ml-2 text-[16.5px]">(+84) 28 3844 111</span>
                    </div>
                    <div className='flex items-center flex-wrap'>
                        <div className='flex items-center mr-3'> <Image style={{ width: 20, height: 20 }}   alt='' src={flagVN} /> <span className="text-white ml-2 hidden sm:inline-block text-[15px]">TIẾNG VIỆT</span> </div>
                        <div className='flex items-center'> <Image style={{ width: 20, height: 20 }} alt='' src={flagUK} /> <span className="text-white ml-2 hidden sm:inline-block text-[15px]">TIẾNG ANH</span> </div>
                    </div>
                    <div className=' md:hidden flex'>
                        <Image style={{ width: 20, height: 20 }} alt='' src={location} />
                        <span className="text-white ml-2 text-[15px] sm:text-[16.5px]">66/52 Phổ Quang, P.2, Q. Tân Bình, TP. Hồ Chí Minh</span>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default HeaderComponent
