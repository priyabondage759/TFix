// import React, { useState } from 'react';
// import {Modal,Button,show} from "react-bootstrap"

// const API_IMG = "https://image.tmdb.org/t/p/w500";

// const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
//     const[show,setShow]=useState("false")
//      const handleShow=()=>setShow(true);
//     const handleClose=()=>setShow(false);
//     return (
//         <div className='card-text-center bg-secondary mb-3'>
//             <div className='card-body'>
               
//             <img className='card-img-top' style={{width:"14rem", margin:"10px",justifyContent:"center"}} src={API_IMG + poster_path} alt={title} />
//             <button type="button" className='btn btn-dark' onClick={handleShow}>ViewMore</button>
//             <Modal abcd={show} onHide={handleClose}>
//                       <Modal.Header closeButton>
//                         <Modal.Title></Modal.Title>
//                       </Modal.Header>
//                       <Modal.Body>
//                       <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} />
//                       <h3>{title}</h3>
//                       <h4>IMDb: {vote_average}</h4>
//                       <h5>Release Date: {release_date}</h5>
//                       <br></br>
//                       <h6>Overview</h6>
//                       <p>{overview}</p>
//                       </Modal.Body>
//                       <Modal.Footer>
//                           <Button variant="secondary" onClick={handleClose}>Close</Button>
//                       </Modal.Footer>
//                   </Modal>

//         </div>
//         </div>
//     );
// };

// export default MovieBox;
import React, { useState } from 'react'
import{Modal,Button,show} from "react-bootstrap"
const API_IMG="https://image.tmdb.org/t/p/w500"
const MovieBox=({title,review,overview,poster_path,video,vote_average,release_date})=> {
    const [show,setShow]=useState("false")
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
  return (
    <div className=' card-text-center bg-secondary mb-3'>
      <img className='card-img-top' src={API_IMG+ poster_path} style={{width:"14rem",margin:"10px" ,justifyContent:"center"}} alt={title}/>
      <button type="button" className='btn btn-dark' style={{alignItems:"center",justifyContent:"center"}} onClick={handleShow}> View</button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
                         {/* <Modal.Title></Modal.Title> */}
                </Modal.Header>
    <Modal.Body>
    <img src={API_IMG+poster_path} style={{width:"14rem",justifyContent:"center"}} alt={title}/>
    <h3>{title}</h3>
    <p>{overview}</p>
    <p>{video}</p>
    <h5>{release_date}</h5>
    <p>{vote_average}</p>
    <p>{review}</p>
    </Modal.Body>
    <button variant="secondary" b className='btn btn-dark' style={{border:"1px solid black"}} onClick={handleClose}>close</button>
    </Modal>
    </div>
  )
}

export default MovieBox

