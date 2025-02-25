import { faFacebook, faXTwitter,faInstagram,faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
    <div className='row w-100 p-5'>
      <div className="col-md-4">
        <h4 className='text-warning mb-4'><FontAwesomeIcon icon={faVideo} className='me-3' />Media Player</h4>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque culpa nostrum eveniet quibusdam reiciendis cum, mollitia nulla praesentium, hic repudiandae, nisi aliquam fuga aperiam maxime expedita? Molestias, repellat quisquam?</p>
      </div>
      <div className="col-md-2 d-md-flex justify-content-center">
      <div>
        <h4 className='mb-4'>Links</h4>
       
          <Link to={'/'}><p>Landing Page</p></Link>
          <Link to={'/home'}><p>Home</p></Link >
         <Link to={'/watchhistory'}> <p>Watch History</p></Link >
       </div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2">
      <h4 className='mb-4'>Guides</h4>
       <div>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootswatch</p>
       </div>
      </div>
      <div className="col md-3 d-md-flex justify-content-center">
        <div>
          <h4>Contact Us</h4>
          <div className='d-flex mt-4'>
            <input type="text" className='form-control' placeholder='Email Id' />
            <button className='btn btn-warning ms-4'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-between mt-4'>
          <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
          <FontAwesomeIcon icon={faXTwitter} className='fa-2x' />
          <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
          <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
          <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
          
          </div>
        </div>
        
      </div>
    </div>
  </>
  )
}

export default Footer