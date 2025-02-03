import React from 'react'

const SectionHeadings:React.FC<{heading: string}> = ({heading}) => {
  return (
    <div className="mb-14">
        <h1 className="cursor-scale relative text-white text-5xl text-center">{heading}</h1>
        <div className="flex justify-center mt-2">
            <div className="relative w-3 h-3 border border-white rounded-full before:absolute before:h-0.5 before:top-1 before:bg-white before:w-24 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-white after:w-24 after:left-5"></div>
        </div>
    </div>
  )
}

export default SectionHeadings