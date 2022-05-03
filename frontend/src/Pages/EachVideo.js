import React from 'react'
import { useContext } from 'react'
import Context from '../Context/Context'
import { useState } from 'react'
import { useEffect } from 'react'
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import Video from '../components/Video'
import Comments from '../components/Comments'
export default function EachVideo() {
    let { postvalue, eachvideo, seteachvideo, setloading,loading } = useContext(Context)

    let [id, setid] = useState()
    
    

    // 2. This code loads the IFrame Player API code asynchronously.
    const GetEachVideo = async () => {
        setloading(true)
        let response = await fetch(`https://gvn-backend.herokuapp.com/api/v1/UGD/${postvalue}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        seteachvideo(data)
        setid(getYouTubeID(data.url))
        setloading(false)

    }

    
    useEffect(() => {
        GetEachVideo()
        if(loading){
            return <h1>Loading...</h1>
        }
    }, [])
    


    return (
        <div>



            <section className="text-gray-600 body-font">
                <div id="player" className="container mx-auto flex px-5  items-center justify-center flex-col">
                    <iframe
                    className='w-full h-[300px] md:h-[700px] m-20 object-cover object-center rounded'
                    alt="loading.."
                    src={eachvideo?.url.split("embed")[0] + 'embed/' + id + '?rel=0' } allowFullScreen/>
                    
                        
                    
                </div>
            </section>
            <Comments/>
        </div>
    )
}
