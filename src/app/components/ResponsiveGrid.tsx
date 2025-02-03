import React from 'react'

const ResponsiveGrid:React.FC<{itemCount: number}> = ({itemCount}) => {
  return (
    <div className="absolute w-full overflow-hidden grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
        {Array.from({ length: itemCount }).map((_,index) => (
            <div key={index} className="h-20 border border-gray-100"></div>
        ))}
    </div>
  )
}


export default ResponsiveGrid