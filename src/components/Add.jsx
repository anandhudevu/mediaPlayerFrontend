import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Add({setAddVideoStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption:'',
    imageUrl:'',
    embedLink:''
  });
  console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getLink=(e)=>{
    const link=e.target.value
    console.log(link);
    if(link.startsWith('https://youtu.be/')){
      // const emlink=link.slice(17,28)
      // console.log(emlink);
      setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${ link.slice(17,28)}`})
      
    }else{
      // const emlink=link.slice(-11)
      // console.log(emlink);
      setVideoDetails({...videoDetails,embedLink:`https://www.youtube.com/embed/${ link.slice(-11)}`})
    }

  }

  const handleUpload =async (e) => {
    e.preventDefault()
    const result=await allVideoApi(videoDetails)
    if(result.status>=200 && result.status<300){
      toast.success("Video Uploaded")
      handleClose()
      setAddVideoStatus(result.data)
    }else{
      toast.error("Something went wrong")
      console.log(result);
    }
    
    
  }
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video </h5>
        <button onClick={handleShow} className='btn fs-5'><FontAwesomeIcon icon={faCloudArrowUp} /></button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='ME-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Pleasefill the following details</p>
          <form className='borderp-3rounded'>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='Video Caption' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} />
            </div>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='Video Image' onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} />

            </div>
            <div className="mb-3">
              <input type="text" className='form-control' placeholder='Video Embed Link'onChange={(e)=>getLink(e)} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={(e)=>handleUpload(e)}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Add