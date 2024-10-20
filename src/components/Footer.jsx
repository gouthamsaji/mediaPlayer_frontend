import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faLinkedinIn,faTwitter,faWhatsapp,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
        <div className='row w-100 p-4'>
            <div className='col-md-4'>
                <h6>iMedia <FontAwesomeIcon icon={faVideo} style={{color: "#ff8b1f",}} /></h6>
                <p>Immerse yourself in a world of entertainment with iMedia app, your ultimate music and video companion. Enjoy crystal-clear audio and stunning visuals as you stream your favorite music and videos.</p>
            </div>
            <div className='col-md-2'>
                <h6>Links</h6>
                <Link to={'/'} style={{textDecoration:'none'}}><p>Landing Page</p></Link>
                <Link to={'/home'} style={{textDecoration:'none'}}><p>Home</p></Link>
                <Link to={'/watchhistory'} style={{textDecoration:'none'}}><p>Watch History</p></Link>
            </div>
            <div className='col-md-2'>
                <h6>Guides</h6>
                <p>React</p>
                <p>React Bootstrap</p>
                <p>Bootswatch</p>
            </div>
            <div className='col-md-4'>
                <h6>Contact Us</h6>
                <div className='d-flex'><input type="text" placeholder='Email ID' className='form-control me-4'/> <button type='button' className='btn btn-warning'>Subscribe</button></div>
                <div className='d-flex justify-content-around mt-3'>
                    <FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#ffffff",}} />
                    <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#ffffff",}} />
                    <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#ffffff",}} />
                    <FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#ffffff",}} />
                    <FontAwesomeIcon icon={faLinkedinIn} size="xl" style={{color: "#ffffff",}} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer