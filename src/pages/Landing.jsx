import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Row className='w-100 mt-5 d-flex justify-content-center align-items-center ps-4'>
        <Col md={1}></Col>
        <Col md={5} className='p-3'>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab molestias fuga consectetur modi. Quia nemo, ipsa unde reiciendis officiis itaque in laborum dolorem, iure facere impedit debitis nihil natus est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto placeat obcaecati culpa quam aliquid at, totam accusamus qui eos molestias id sit quod explicabo! Neque vero voluptatibus cum officia porro?</p>
        <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link >
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
        <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" className='w-75' />
        </Col>
      </Row>
      <div className='container'>
        <h3 className='text-center my-5'>Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1" height={'350px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='px-md-5'>
          <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1" height={'350px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          <Col md={3}>
          <Card style={{ width: '100%' }} className='p-3 mt-3'>
              <Card.Img variant="top" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif" height={'350px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          <Col md={1}></Col>

        </Row>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary my-5 p-3 border-2 rounded">
            <div className="row p-4">
              <div className="col-md-6">
                <h3>Simple fast and powerful</h3>
                <p className='mt-5 '> <span className='fs-4'>Lorem ipsum:</span> dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci dolore obcaecati labore laudantium officiis architecto cupiditate commodi debitis. Repellat eaque incidunt aperiam nisi molestiae provident amet minus laborum recusandae.</p>
                <p className='mt-5 '> <span className='fs-4'>Lorem ipsum:</span>dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci dolore obcaecati labore laudantium officiis architecto cupiditate commodi debitis. Repellat eaque incidunt aperiam nisi molestiae provident amet minus laborum recusandae.</p>
                <p className='mt-5 '> <span className='fs-4'>Lorem ipsum:</span> dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus adipisci dolore obcaecati labore laudantium officiis architecto cupiditate commodi debitis. Repellat eaque incidunt aperiam nisi molestiae provident amet minus laborum recusandae.</p>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/6gtIBLAbxsM" title="World Championship Of Legends, 2024 | England vs India | Highlights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Landing