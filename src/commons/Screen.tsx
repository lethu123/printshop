import React from 'react'
import styles from "@assets/scss/home.module.scss"
import Script from 'next/script';
import "@assets/scss/home.scss"

const Screen = ({ _className, children }: { children: React.ReactNode; _className: string}) => {
  return (
    <main className={`min-h-screen max-w-screen-2xl mx-auto relative  ${_className}`}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      {children}

      <div className={`${styles.submenu} bg-setting fixed inset-y-2/4 right-0 rounded-s-lg py-5 px-4 bg-white flex justify-center items-center text-2x`}>
        <div className={` text-[18px] setting-icon cursor-pointer py-3`}>
          <i className="fa fa-cog "></i>
        </div>
        <div className={`${styles.submenu_show} absolute right-1 -bottom-[100px] z-10 flex  max-w-max`}>
          <div className=" max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className=" divide-x divide-gray-900/5 bg-gray-50 ">
              <button id='dark-mode' className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                Dark mode
              </button>
              <button id='light-mode' className="flex items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                Light mode
              </button>
            </div>
          </div>
        </div>
      </div>

      <Script id='main-script'>
        {`
        let body = document.querySelector('body');
        document.querySelector('#dark-mode').addEventListener('click', () => {
          body.classList.remove('light-mode');
        }); 
        document.querySelector('#light-mode').addEventListener('click', () => {
          body.classList.add('light-mode');
        }); 
        `}
      </Script>
    </main>
  )
}

export default Screen
