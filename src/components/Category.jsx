import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Videocard from './Videocard';
import { addCategoryApi, addVideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';

function Category({videoStatus}) {

    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState("")
    const [allCategory, setAllCategory] = useState([])
    const [addCategoryStatus, setAddCategoryStatus] = useState({})
    const [deleteCategoryStatus, setDeleteCategoryStatus]=useState({})

    const handleClose = () => {
        handleClear()
        setShow(false)
    }
    const handleShow = () => setShow(true);

    const handleClear=()=>{
        setCategoryName("")
    }

    const handleAdd=async()=>{
        if(categoryName){
            const reqBody={
                category:categoryName,
                allvideos:[]
            }
            const result = await addCategoryApi(reqBody)
            if(result.status>=200 && result.status<300){
                toast.success('Playlist created successfully!')
                handleClose()
                setAddCategoryStatus(result.data)
            }
            else{
                toast.error('Could not add playlist')
                handleClose()
            }
        }
        else{
            toast.info('Please add a playlist name')
        }
    }

    const getCategory=async()=>{
        const result = await getAllCategoryApi()
        setAllCategory(result.data)
    }

    const handleDelete=async(id)=>{
        const result = await deleteCategoryApi(id)
        if(result.status>=200&&result.status<300){
            setDeleteCategoryStatus(result.data)
        }
    }

    const ondrag=(e)=>{
        e.preventDefault() //prevents the refresh or data loss
    }

    const VideoDrop=async(e,categoryDetails)=>{
        console.log(categoryDetails)

        const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
        console.log(videoDetails)

        if(categoryDetails.allvideos.find((item)=>item.id==videoDetails.id)){toast.error('Video already in playlist')}
        else{
            categoryDetails.allvideos.push(videoDetails)
            
            const result = await addVideoToCategoryApi(categoryDetails.id,categoryDetails)

            if(result.status>=200&&result.status<300){
                toast.success('Video added to playlist')
                getCategory();
            }
            else{
                toast.error('Something went wrong')
            }
        }
        
    }

    const videoDrag = (e,video,category)=>{
        const dataShare = {
            category,
            video
        }
        e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
    }

    useEffect(()=>{
        getCategory()
    },[addCategoryStatus,deleteCategoryStatus,videoStatus])

  return (
    <>
        <h6>My Playlist</h6>
        <button className='btn btn-warning w-100 mt-2' onClick={handleShow}>Add Playlist</button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title style={{fontSize:"24px"}}><FontAwesomeIcon icon={faLayerGroup} style={{color: "#ffffff",}} /> Create a Playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" placeholder='Enter Playlist Name' className='form-control' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClear}>
                Clear
            </Button>
            <Button variant="warning" onClick={handleAdd}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>

        {allCategory?.length>0 &&

        allCategory.map((item)=>(
            <div className='border border-secondary border-2 p-2 rounded mt-3' droppable onDragOver={(e)=>{ondrag(e)}} onDrop={(e)=>VideoDrop(e,item)}>
            <div className='d-flex justify-content-between mb-3'>
                <h6>{item?.category}</h6>
                <button className='btn btn-light' onClick={()=>handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></button>
            </div>
            {item?.allvideos?.length>0 && 
            item?.allvideos?.map((video)=>(
                <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
                <Videocard video={video} isPresent={true} />
                </div>
            ))
            }
            
            </div>
        ))  

        }
    </>
  )
}

export default Category