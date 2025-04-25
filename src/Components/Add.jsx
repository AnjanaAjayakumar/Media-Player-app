import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadvideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
    setUploadVideo({id:"",title:"",url:"",link:""})
  }
  const handleShow = () => setShow(true);

  const[uploadVedio,setUploadVideo]=useState({id:"",title:"",url:"",link:""})

console.log(uploadVedio);

  const getYoutubeLink=(e)=>{
    const {value}=e.target;
    // console.log(value);
    if(value.includes("v=")){
      let VID=value.split('v=')[1].slice(0,11)
      // console.log(`https://www.youtube.com/embed/${VID}`);
      setUploadVideo({...uploadVedio,link:`https://www.youtube.com/embed/${VID}`})
    }else{
      setUploadVideo({...uploadVedio,link:""})
    }
  }
  
  const handleAdd=async()=>{
    const{id,title,url,link}=uploadVedio

    if(!id || !title || !url || !link){
      alert("please fill missing fields")
    }else{
      // upload vedio to json server
      const result = await uploadvideoAPI(uploadVedio)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert("video uploaded")
        handleClose()
        setUploadVideo({id:"",title:"",url:"", link:""})
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }
  
  return (
    <div>
      <div className='d-flex mb-5 mt-5 align-items-center'>
        <h2>Upload Vedios</h2>
        <button className='btn btn-link' onClick={handleShow}> <i className="fa-solid fa-arrow-up-from-bracket fa-beat fa-2x mb-2 ms-2 me-2"></i></button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel
        controlId="floatingInput1"
        label="VideoId"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter VideoId" onChange={(e)=>setUploadVideo({...uploadVedio,id:e.target.value})}/>
      </FloatingLabel>
          
          <FloatingLabel
        controlId="floatingInput2"
        label="Video Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Name" onChange={(e)=>setUploadVideo({...uploadVedio,title:e.target.value})} /> 
      </FloatingLabel>
          <FloatingLabel
        controlId="floatingInput3"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVedio,url:e.target.value})} /> 
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput4"
        label="Video URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink} /> 
      </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

      </div>
    </div>
  )
}

export default Add
