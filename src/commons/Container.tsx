import React from 'react'

const Container = ({children}: {children : React.ReactNode;}) => {
  return (
    <div  className="w-full xl:w-5/6 max-w-screen-xl justify-center mx-auto px-4 xl:px-0">
       {children}
    </div>
  )
}

export default Container
