import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from './NavbarComponent';
import {  Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './CustomCSS/HomePageCSS.css'
import HomePage1 from './assets/HomePage1.jpeg'


function HomePage(){

  const cardData = [
    { title: 'Know more about PACE', img: HomePage1 },
    { title: 'Exploring phytoplanktons', img: 'url-to-your-image2' },
    { title: 'What is aerosol?', img: 'url-to-your-image3' },
    { title: 'Build your own PACE', img: 'url-to-your-image4' },
    { title: 'Ocean Ecology', img: 'url-to-your-image5' },
    { title: 'Ocean Colour', img: 'url-to-your-image6' },
  ];
    return(
        <>
        <NavbarComponent/>

        <Container fluid>
      <Row>
        {/* Left Sidebar */}
        <Col md={4} className="heading-text"style={{ backgroundColor: '#4AAEB5', padding: '20px' }}>
        <h1>LEARNING WITH PACE!</h1>


          <h2 style={{ backgroundColor: '#32ef38', padding: '10px' }}>PLANKTON</h2>
          <h2 style={{ backgroundColor: '#ef9c32', padding: '10px' }}>AEROSOL</h2>
          <h2 style={{ backgroundColor: '#5afcf7', padding: '10px' }}>CLOUD</h2>
          <h2 style={{ backgroundColor: '#0a6cda', padding: '10px' }}>OCEAN ECOSYSTEM</h2>
          
        </Col>

        {/* Right Carousel */}
        <Col md={8} className="p-0">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-height"
                src={HomePage1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>PACE</h3>
                <p>Some representative placeholder content for the first slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Second+Slide"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second Slide Label</h3>
                <p>Some representative placeholder content for the second slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Third+Slide"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third Slide Label</h3>
                <p>Some representative placeholder content for the third slide.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>



 <Carousel style={{ height: '500px'}}> {/* Adjust height as needed */}
      <Carousel.Item style={{ height: '100%' }}>
        <img
          className="d-block w-100"
          src={HomePage1}
          alt="First slide"
          style={{ objectFit: 'cover', height: '500px' }} // Ensures image covers the height
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '100%' }}>
        <img
          className="d-block w-100"
          src={HomePage1}
          alt="Second slide"
          style={{ objectFit: 'cover', height: '500px' }} // Ensures image covers the height
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '100%' }}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1920x500?text=Third+Slide"
          alt="Third slide"
          style={{ objectFit: 'cover', height: '100%' }} // Ensures image covers the height
        />
        <Carousel.Caption>   
      

          <h3>Third Slide Label</h3>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    <div className="container-fluid bg-blue text-center py-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card  text-white card-hover">
              <div
                className="card-img-top card-image h-100"
                style={{ backgroundImage: `url(${card.img})` }}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <a href="#" className="btn btn-light">Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>




    <div className="container-fluid learning-hub-section text-center py-5">
      <h2 className="text-white mb-4">Learning Hub</h2>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3">
          <div className="learning-card">
            <h4 className="text-white">8-11 Age</h4>
          
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="learning-card">
            <h4 className="text-white">12-15 Age</h4>
          
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="learning-card">
            <h4 className="text-white">16+ Age</h4>
          
          </div>
        </div>
      </div>
    </div>




 

 

        </>
    )
}
export default HomePage;