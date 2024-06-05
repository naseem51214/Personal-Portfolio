import React from 'react'
import reactjs from '../../public/pojrcts/todo.png'
import iShopping from '../../public/pojrcts/iShopping.png'
function Portfolio() {
  const cardItems = [
    
    {
      id:1,
      logo:reactjs,
      name:"Todo List",
      sourCode:['https://github.com/naseem51214/iList'],
      demo:['https://i-list.vercel.app/']
    },
    {
      id:2,
      logo:iShopping,
      name:"iShopping",
      
      sourCode:['https://github.com/naseem51214/iShopping'],
      demo:['https://i-shopping.vercel.app/']
    }
    // {
    //   id:1,
    //   logo:MongoDB,
    //   name:"MongoDB"
    // },
    // {
    //   id:2,
    //   logo:expressJs,
    //   name:"Express js"
    // },
    // {
    //   id:3,
    //   logo:reactJs,
    //   name:"React js"
    // }
    // ,
    // {
    //   id:4,
    //   logo:nodeJs,
    //   name:"Node js"
    // },
    // {
    //   id:5,
    //   logo:java,
    //   name:"java"
    // },
    // {
    //   id:6,
    //   logo:python,
    //   name:"python"
    // }
  ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      {/* <span className='underline font-semibold'>Featured projects</span> */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-3 my-5 h-auto'>
        {
          cardItems.map(({id,logo,name})=>(
            <div className='md:w-[300px] md:h-[400px] border-[2px] rounded-lg p-1 mt-5 shadow-lg cursor-pointer hover:scale-110 duration-300 flex flex-col justify-center'  key={id}>
            <div className='flex justify-center'>

            <img src={logo} className='w-[280px] object-cover h-[220px] p-1  border-2' alt="" />
            </div>
            <div>
              <div className='px-2 font-bold text-xl mb-2'>{name}</div>
              <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='px-6 py-4 space-x-3 justify-around'>
              <button className='w-20 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'><a href={cardItems[0].demo} target='_blank'>Demo</a></button>
              <button className='w-30 h-10 bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'><a href={cardItems[0].sourCode} target='_blank'>Source Code</a></button>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio
