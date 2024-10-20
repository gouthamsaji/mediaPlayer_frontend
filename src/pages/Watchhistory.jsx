import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Table from 'react-bootstrap/Table';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi';

function Watchhistory() {

  const [allHisVideos,setAllHisVideos]=useState([])
  const [deleteStatus,setDeleteStatus]=useState(false)
  
  const getAllHistoryVideos=async()=>{
    const result = await getAllVideoHistoryApi()
    setAllHisVideos(result.data)
  }

  const handleDelete = async(id) => {
    const result = await deleteHistoryVideoApi(id)
    if(result.status>=200&&result.status<300){
      setDeleteStatus(true)
    }
  }

  useEffect(()=>{
    getAllHistoryVideos()
    setDeleteStatus(false)
  },[deleteStatus])

  return (
    <>
      <div className='d-flex justify-content-between p-4 mt-4'>
        <h6>Watch History</h6>
        <Link to={'/home'} style={{textDecoration:'none'}}><h6><span className='d-none d-md-inline'>Go to Home</span> <FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /></h6></Link>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10 table-responsive'>
            {allHisVideos?.length>0? <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Title</th>
                <th>URL</th>
                <th>Timestamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allHisVideos?.map((item)=>(
                <tr>
                <td>{item.id}</td>
                <td>{item.Caption}</td>
                <td>{item.URL}</td>
                <td>{item.Time}</td>
                <td><button onClick={()=>handleDelete(item?.id)} className='btn'><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
              )) 
                }
             </tbody>
             </Table>
                :
             <h4 className='text-danger text-center'>No Watch History <FontAwesomeIcon icon={faClockRotateLeft} style={{color: "#ffffff",}} /></h4>}
          </div>
          <div className='col-md-1'></div> 
        </div>
      </div>
    </>
  )
}

export default Watchhistory