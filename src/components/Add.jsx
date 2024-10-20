import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddVideoStatus}) {

    const [videoDetails, setVideoDetails] = useState({
        caption:"",
        imageUrl:"",
        embedLink:""
    })
    console.log(videoDetails)
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);handleCancel()}
    const handleShow = () => setShow(true);

    const handleCancel = () => {
        setVideoDetails({
            caption:"",
            imageUrl:"",
            embedLink:""
        })
    }

    const handleAdd = async() => {
        
        const {caption,imageUrl,embedLink} = videoDetails

        if(!caption || !imageUrl || !embedLink){
            toast.info('Please fill the form completely')
        }
        else{
            if(videoDetails.embedLink.startsWith('https://youtu.be/')){
                const embedL = `https://www.youtube.com/embed/${videoDetails.embedLink.slice(17,28)}`
    
                const result = await addVideoApi({...videoDetails,embedLink:embedL})
                console.log(result)
    
                if(result.status>=200 && result.status<=299){
                    toast.success('Video uploaded successfully!')
                    handleClose()
                    setAddVideoStatus(result.data)
                }
                else{
                    toast.error('Something went wrong!')
                    handleClose()
                }
            }
            else{
                const embedL = `https://www.youtube.com/embed/${videoDetails.embedLink.slice(-11)}`
    
                const result = await addVideoApi({...videoDetails,embedLink:embedL})
                console.log(result)
    
                if(result.status>=200 && result.status<=299){
                    toast.success('Video uploaded successfully!')
                    handleClose()
                    setAddVideoStatus(result.data)
                }
                else{
                    toast.error('Something went wrong!')
                    handleClose()
                }
            }
        }
        
    }

  return (
    <>
        <div className='d-flex align-items-center'>
            <span className='d-none d-md-inline'><h5>Upload New Video</h5></span>
            <button className='btn' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size="2xl" style={{color: "#ffffff",}} /></button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title><FontAwesomeIcon icon={faPhotoFilm} style={{color: "#ffffff",}} /> Upload a Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <p>Please enter the details</p>
                        <input type="text" className='form-control mb-3' value={videoDetails.caption} placeholder='Video Title' onChange={(e)=>{setVideoDetails({...videoDetails,caption:e.target.value})}}/>
                        <input type="text" className='form-control mb-3' value={videoDetails.imageUrl} placeholder='Video Image' onChange={(e)=>{setVideoDetails({...videoDetails,imageUrl:e.target.value})}}/>
                        <input type="text" className='form-control' value={videoDetails.embedLink} placeholder='Video Url' onChange={(e)=>{setVideoDetails({...videoDetails,embedLink:e.target.value})}}/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleCancel}>
                    Clear
                </Button>
                <Button variant="success" type='button' onClick={handleAdd}>
                    Upload
                </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position="top-center" autoClose={3000} theme="dark" />
        </div>
    </>
  )
}

export default Add