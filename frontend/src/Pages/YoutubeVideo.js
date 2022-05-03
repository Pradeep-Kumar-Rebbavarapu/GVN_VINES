import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Context from '../Context/Context'
import { BsFillPlayCircleFill } from "react-icons/bs";
import ReactPlayer from 'react-player/lazy'
const YoutubeVideo = () => {
  let { setAllVideos,AllVideos,setpostvalue,seteachvideo,eachvideo,setloading,loading } = useContext(Context)
   let navigate = useNavigate()
  const GetAllvideos = async () => {
    setloading(true)
    let response = await fetch('https://gvn-backend.herokuapp.com/api/v1/GetAllVideos/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    
    setAllVideos(data)
    setloading(false)
    
  }

  useEffect(() => {
    
    GetAllvideos()
    if(loading){
      return <h1>Loading...</h1>
    }
  }, [])
  
  
  return (
    <div>

    
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 flex-wrap -m-4">
            {AllVideos.map((video) => {
              return (
                <div onClick={()=>{
                  setpostvalue(video.id)
                  localStorage.setItem('postvalue',video.id)
                  navigate('/EachVideo')
                }} className=" p-4 w-full">
                  <Link to="/EachVideo" className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={video.image} />
                  <Link to="/EachVideo" className=''>
                  <BsFillPlayCircleFill className="-translate-y-[180px] translate-x-[150px] h-10 w-10 text-gray-50  hover:text-gray-300 ring-[7px] rounded-full ring-white ring-opacity-50"/>
                  </Link>
                  </Link>
                  <input id="postid" type="text"  readOnly/>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{video.title}</h2>
                    <p className="mt-1"></p>
                  </div>
                </div>
              )
            })}


          </div>
        </div>
      </section>

    </div>
  )
}

export default YoutubeVideo
