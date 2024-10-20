import React, { useEffect,useState } from 'react'
import Videocard from './Videocard'
import { addVideoToCategoryApi, getVideosApi } from '../services/allApi'

function Allvideos({addVideoStatus,setVideoStatus}) {

    const [allVideos,setAllVideos] = useState([])

    const [deleteVideoStatus,setDeleteVideoStatus] = useState({})

    // side effect
    const getAllVideo = async()=>{
        const result = await getVideosApi()
        setAllVideos(result.data)
    }
    console.log(allVideos)
   
    const ondrop = (e)=>{
        e.preventDefault()
    }

    const VideoDrop = async(e)=>{
        const {category,video}=JSON.parse(e.dataTransfer.getData("dataShare"))

        const newArray = category.allvideos.filter((item)=>item.id!=video.id)
        const newCategory = {
            category:category.category,
            allvideos:newArray,
            id:category.id
        }
        const result = await addVideoToCategoryApi(category.id,newCategory)
        if(result.status>=200 && result.status<300){
            toast.info('Successfully removed!')
            setVideoStatus(result.data)
        }
    }

    //to handle side effect
    useEffect(()=>{
        getAllVideo()
    },[addVideoStatus,deleteVideoStatus])

  return (
    <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>VideoDrop(e)}> 
        <h6>All Videos</h6>
        {/* When Video Added */}
        { allVideos.length>0 ?
            
        <div className='container'>
            <div className='row'>  
                {allVideos.map((item)=>(
                    <div className='col-md-3 p-2'>
                    <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
                    </div>
                ))
                }
            </div>
        </div>  

            :

        <div className='container'>
            <div className='row'>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <img src="https://www.pngplay.com/wp-content/uploads/7/Cart-Transparent-PNG.png" alt="no video uploaded" className='w-100' />
                    <h6 className='text-danger'>Oops.. looks like you haven't uploaded a video yet</h6>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
        }
    </div>
  )
}

export default Allvideos