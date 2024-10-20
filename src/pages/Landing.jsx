import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import musicVideo from '../assets/music.mp4';
import Card from 'react-bootstrap/Card';
import feature1 from '../assets/feature1.mp4';
import feature2 from '../assets/feature2.mp4';
import feature3 from '../assets/feature3.mp4';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    <Container className='d-flex justify-content-center align-items-center py-3 px-4'>
      <Row className='mt-5'>
        <Col md={6}>
            <h3>Grab your <span className='text-warning'>Headphones</span>!🎧</h3>
            <p style={{textAlign:'justify'}}>The iMedia App is your ultimate destination for free, ad-supported music. Explore a vast library of songs, playlists, and artists, and discover new music tailored to your preferences. Enjoy seamless background playback and download playlists for offline listening (with limitations). Sing along to your favorite songs with built-in lyrics, and immerse yourself in high-quality music videos. While you can watch YouTube music videos for free, please note that there may be ads during playback.</p>
            <Link to={'/home'}><button className='btn btn-warning'>Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='mt-5 mt-md-0'>
            <video src={musicVideo} controls autoPlay loop style={{ width: '100%' }}>
                Your browser does not support the video tag.
            </video>
        </Col>
      </Row>
    </Container>
    <Container>
        <Row className='text-center mb-5 mt-5'>
            <h3 className='mb-md-5'>Features</h3>
            <Col md={4} className='mt-4 md-mt-0'>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Music Library</Card.Title>
                    <video controls autoPlay loop style={{ width: '100%' }}>
                        <source src={feature1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Card.Text>
                    Users are able to search for specific tracks or browse through curated playlists and recommendations using the iMedia app.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4} className='mt-4 md-mt-0'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>High-Quality</Card.Title>
                    <video controls autoPlay loop style={{ width: '100%' }}>
                        <source src={feature2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Card.Text>
                    The platform provides premium video streaming service with high-quality sound for an immersive listening experience.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4} className='mt-4 md-mt-0'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Music Discovery</Card.Title>
                    <video controls autoPlay loop style={{ width: '100%' }}>
                        <source src={feature3} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Card.Text>
                    Users can explore curated playlists, genre-specific recommendations, and trending tracks to discover new music.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row className='p-5'>
            <Col className='border border-secondary border-2 rounded p-4'>
                <Row>
                    <Col md={6}>
                    <h3 className='text-warning mb-4'>Simple and Powerful !</h3>
                        <h5>🍿 Grab your popcorn</h5>
                        <p className='mt-2'>Don't forget to wear headphones for maximum output.</p>
                        <h5>✅ No subscribtions</h5>
                        <p className='mt-2'>Our videos are completely free for users to watch.</p>
                        <h5>➕ Find more</h5>
                        <p className='mt-2'>Find more videos on the home page</p>
                    </Col>
                    <Col md={6}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hv0ua_mQ1wM?si=vbzcP5PMgjjRIEVC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Landing