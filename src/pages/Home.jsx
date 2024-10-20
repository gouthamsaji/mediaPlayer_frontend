import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'

function Home() {
  const [addVideoStatus, setAddVideoStatus] = useState({})
  const [videoStatus, setVideoStatus] = useState({})
  return (
    <>
      <div className='d-flex p-md-4 p-3'>
        <Add setAddVideoStatus={setAddVideoStatus} />
        <Link to={'/watchhistory'} className='ms-auto' style={{textDecoration:'none'}}><h6 className='mt-2'>Watch History <FontAwesomeIcon icon={faClockRotateLeft} style={{color: "#ffffff",}} /></h6></Link>
      </div>

      <div className='container-fluid px-4'>
        <div className='row'>
          <div className='col-md-9'>
            <Allvideos addVideoStatus={addVideoStatus} setVideoStatus={setVideoStatus} />
          </div>
          <div className='col-md-3'>
            <Category videoStatus={videoStatus}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home