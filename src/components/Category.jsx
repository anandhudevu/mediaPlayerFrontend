import React, { useEffect } from 'react'
import Cards from './Cards'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, getAllCategory, removeCategoryApi, updateCategoryApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




function Category({dragOut,setDragOut}) {
  const [show, setShow] = useState(false);
  const [categoryname, setCategoryname] = useState('')
  const [allCategory, setAllCategory] = useState([])
  const [addStatus, setAddStatus] = useState(false)
  const [updateStatus, setUpdateStatus] = useState(false)


  const handleClose = () => {
    setShow(false)
    setCategoryname('');
  }
  const handleShow = () => setShow(true);
  console.log(categoryname);
  const handleCategoryAdd = async () => {
    if (categoryname) {
      const reqBody = {
        categoryname,
        allVideos: []
      }
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setCategoryname('')

        handleClose()
        toast.success("Category Added")
        setAddStatus(true)
      }
    } else {
      toast.error("pls add category")
    }

  }
  const getCategory = async () => {
    const result = await getAllCategory()
    setAllCategory(result.data)
  }
  console.log(allCategory);
  const handleDelete = async (id) => {
    await removeCategoryApi(id)
    setAddStatus(true)
  }
  const dragOver = (e) => {
    e.preventDefault()
  }
  const VideoDrop = async(e, selectedCategory) => {
    console.log('Category id is :', selectedCategory);
    const vDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(vDetails);
    if (selectedCategory.allVideos.find(item => item.id == vDetails.id)) {
      alert("video already added")

    } else {
      selectedCategory.allVideos.push(vDetails)
      const result=await updateCategoryApi(selectedCategory.id,selectedCategory)
      // console.log(result);
      alert("video added successfully")
      setUpdateStatus(true)
    }
    // console.log(selectedCategory);
  }
  const ondrag=(e,videoId,categoryDetails)=>{
   console.log(videoId,categoryDetails);
   const dataShare={videoId,categoryDetails}
   e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))



  }

  useEffect(() => {
    setAddStatus(false)
    setUpdateStatus(false)
    setDragOut(false)
    getCategory()
  }, [addStatus, updateStatus,dragOut])
  return (
    <>
      <h5 className='mt-5 mt-md-0'>Category</h5>


      <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>
      {allCategory.length > 0 ?
        allCategory.map((item) => (<div className='p-3 border rounded mt-4 ' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => VideoDrop(e, item)}>
          <div className='d-flex justify-content-between'>
            <p className='mb-4'>{item.categoryname}</p>
            <Button onClick={() => { handleDelete(item.id) }} className="btn btn-danger" ><FontAwesomeIcon icon={faTrashCan} /></Button>
          </div>

          {item?.allVideos.length>0? 
            item?.allVideos?.map((video)=>(<div draggable onDragStart={(e) => ondrag(e, video.id, item)}>
            <Cards video={video} isPresent={true} />
          </div>)):null }
        </div>
        ))
        : <p className='text-danger mt-5'>no category added</p>}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'>
            <input type="text" className='form-control' placeholder='Category Name' onChange={(e) => { setCategoryname(e.target.value) }} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Category