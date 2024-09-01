import React from 'react'

function GridItem({title , data}:{title:string , data:string}) {
  return (
    <div className="p-4 pb-2 border-b-2 border-gray-200">
    <p className=" text-md font-md text-sm text-gray-400">{title}</p>
    <h2 className=" text-lg mt-1 font-semibold">{data}</h2>
</div>
  )
}

export default GridItem