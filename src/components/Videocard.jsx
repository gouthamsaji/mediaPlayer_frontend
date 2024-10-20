import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';

function Videocard({video,setDeleteVideoStatus,isPresent}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
        setShow(true);

        const time = new Date()
        let formattedDate = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)

        const reqBody={
            Caption : video?.caption,
            URL : video?.embedLink,
            Time : formattedDate
        }
        const result = await addVideoHistoryApi(reqBody)
        console.log(result)
    }

    const handleDelete = async(id)=>{
        const result = await deleteVideoApi(id)
        console.log(result)
        if(result.status>=200&&result.status<300){
            setDeleteVideoStatus(result.data)
        }
    }

    const videoDrag=(e,video)=>{
        console.log(video)
        e.dataTransfer.setData("videoDetails",JSON.stringify(video))
    }

  return (
    <>
        <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,video)} className='mt-3'>
            { !isPresent && <Card.Img onClick={handleShow} style={{ cursor: 'pointer' }} variant="top" src={video?.imageUrl} className='w-100' height={'300px'} />}
            <Card.Body className='d-flex justify-content-between align-items-center'>
                <Card.Title style={{ fontSize: '16px',margin: 0 }}>{video?.caption}</Card.Title>
                { !isPresent && <Button style={{ backgroundColor: 'transparent', border: 'none' }}><FontAwesomeIcon icon={faTrash} style={{color: "#ffffff",fontSize:"14px"}} onClick={()=>handleDelete(video?.id)} /></Button>}
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: '16px' }}>{video?.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <iframe width="100%" height="315" src={`${video?.embedLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default Videocard