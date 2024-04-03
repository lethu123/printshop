import React from 'react'
import styles from '@assets/scss/home.module.scss';

const HoverImage = ({ classImage }: { classImage: string }) => {
    return (
        <div className={`${styles.image_hover} rounded`}>
            <div className={`img-scale ${classImage}`}> </div>
            <div className={`${styles.view_detail} flex justify-center items-center`}>
                <link href={'#'}>Xem chi tiết</link>
            </div>
        </div>
    )
}

export default HoverImage
