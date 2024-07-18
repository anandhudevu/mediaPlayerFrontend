import React, { useEffect, useState } from 'react'


import Cards from './Cards'
import { getAllVideosApi,updateCategoryApi } from '../services/allApi'


function View({addVideoStatus,setDragOut}) {
  const [allVideo, setAllVideo] = useState([])
  const[deleteVideoStstatus,setAddVideoStatus]=useState([])

  const getAllVideo = async () => {
    const result=await getAllVideosApi()
    //console.log(result);
    setAllVideo(result.data)
  }
  console.log(allVideo);

  const dragOver=(e)=>{
    e.preventDefault()
    // setDragOut(false)
  }

  const videoDrop=async(e)=>{
    const result=JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(result);
    const selectedCategory=result.categoryDetails
    const newDetails=selectedCategory.allVideos.filter((item)=>item.id!=result.videoId)
    console.log(newDetails);

  
   const reqBody={
    categoryName:selectedCategory.categoryname,
    allVideos:newDetails,
    id: selectedCategory.id
   }
   const response=await updateCategoryApi(selectedCategory.id,reqBody)
   console.log(response);
   if( response.status>=200 && response.status<300){
    setDragOut(true)
   }
  }
  useEffect(() => {
    getAllVideo()
    
  },[addVideoStatus,deleteVideoStstatus])

 
   



  return (
    <>
   <div className="row w-100" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
      <h4>All Videos</h4>
      {allVideo ?
          allVideo?.map((item) => (<div className="col-md-3 mt-4">
            <Cards video={item} setAddVideoStatus={setAddVideoStatus} />
          </div>))
          :
          <p className='text-danger fs-4'>Nothing to display</p>
        }
      
    </div>
    </>
  )
}


export default View