import React  from 'react'

const Container = ({ className, children }: { className?: string, children: React.ReactNode; }) => {
  return (
    <div className={`w-full xl:w-5/6 max-w-screen-2xl justify-center mx-auto px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  )
}

export default Container
