import React from 'react'

const Container = ({children}: {children : React.ReactNode;}) => {
  return (
    <div  className="w-5/6 justify-center mx-auto">
       {children}
    </div>
  )
}

export default Container
