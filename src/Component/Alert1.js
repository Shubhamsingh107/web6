import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import Navbar1 from './Navbar1';

function Alert1() {
  return (
    <>
    <Navbar1 />
    
    <div className="color">
    <div className="border">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 bg-black"
          src="https://www.rd.com/wp-content/uploads/2021/10/jm-barrie-life-quote.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 bg-black"
          src="https://routinelynomadic.com/wp-content/uploads/2022/02/Short-Quotes-About-Life-768x1024.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 >Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 bg-black"
          src="https://pbs.twimg.com/media/FJuAcrhWQAAlYCs.jpg:large"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

    </div>
    </div>
    <Footer />
     </>
  );
}

export default Alert1;