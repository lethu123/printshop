import React from 'react'

const Screen = ({children}: {children : React.ReactNode;}) => {
  return (
    <main  className="min-h-screen">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
       {children}
    </main>
  )
}

export default Screen
