import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByurl=useNavigate()
  return (
    <>
      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"blueviolet",fontSize:"40px"}}>
          Welcome to <span className='text-warning'>Media-Player</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis assumenda, debitis harum voluptatibus aliquam rem incidunt consectetur accusantium aut hic obcaecati, cupiditate, architecto ipsa doloribus esse soluta quo voluptatum laborum.
        </p>
      <Button onClick={()=>navigateByurl('/home')} className="btn btn-info">
          Get Started
        </Button>
        </Col>
        <Col lg={5}>
        <img src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" alt="" className="ms-5 justify-content-between"/>
        </Col>
        <Col></Col>
      </Row>

      <div className='container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100'>

      <h5 className='text-warning' style={{fontSize:"40px"}}>Features</h5>

      <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100' >

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" />
      <Card.Body>
        <Card.Title  className='text-warning'>Managing Vedios</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'285px'} src="https://images.steamusercontent.com/ugc/789753588663340202/3A577E4B5AED98E18C8193DB6AE2A9BDB8F0794B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
      <Card.Body>
        <Card.Title  className='text-warning'>Cateforized Vedios</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
     
     
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'290px'}  src="https://cdn.dribbble.com/userupload/22221956/file/original-fb5873b0f35445bcb7d3b5bcfa5bc18c.gif" />
      <Card.Body>
        <Card.Title  className='text-warning'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      </div>

  <div className='container border rounded p-4 border-light mt-5 d-flex justify-content-center'>
    
    <div className='col-lg-5'>
    <h4 className='text-warning'>Simple Powerful And Fast</h4>
    <h6 className='mb-5 mt-4'><span className='text-warning'> Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ullam quasi eius deserunt totam sunt blanditiis cupiditate, quod numquam praesentium repellendus quam alias saepe voluptatem sapiente unde? Porro, non fugiat?
    </h6>
    <h6 className='mb-5 mt-4'><span className='text-warning'> Categorized Vedios</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ullam quasi eius deserunt totam sunt blanditiis cupiditate, quod numquam praesentium repellendus quam alias saepe voluptatem sapiente unde? Porro, non fugiat?
    </h6>
    <h6 className='mb-5 mt-4'><span className='text-warning'> Managing Vedios</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ullam quasi eius deserunt totam sunt blanditiis cupiditate, quod numquam praesentium repellendus quam alias saepe voluptatem sapiente unde? Porro, non fugiat?
    </h6>
    </div>
    <div className='col-lg-5 ms-5'>
    <iframe width="560" height="450" src="https://www.youtube.com/embed/PGqltBCo6cU?si=zbW_8YIuOEMwc6bb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
    
    </>
  )
}

export default Landingpage
