import '../styles/Home.css';
import { useState } from 'react';


export const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const movementRatio = 5;

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <div className='page-container' onMouseMove={handleMouseMove}>
      <h1 className='welcome-message'>
        Welcome to Z-Audio
      </h1>
      <h2>
        Maximum quality, minimum cost
      </h2>
      <div 
        className='first-section'
        style={{
          backgroundImage:"url(../../public/subwoofer.jpg)",
          backgroundPosition: `${position.x/movementRatio}px ${position.y/movementRatio}px`,
          transition: '0.2s',
          backgroundSize: "400px 400px",
        }}
      >
        <div className='first-section-text first-section-item'>
          <h3>
            Who are we?
          </h3>
          <p>
            We are a company that offers high quality audio equipment at a low price.
            This is born of seeing that most consumer audio products are made from cheap
            components, and then marked up drastically to your detriment. Seeing this, 
            we decided to make a company dedicated to creating products using only products
            with the best quality and value. We then offer these to you with a very small markup,
            so that you can enjoy the best audio experience possible, and we don't have to
            work a second job.
          </p>
        </div>
        <div className='first-section-info'>
          <h3>
            Why us?
          </h3> 
          <div className='first-section-grid-container'>
            {/* Here we are going to make a grid of different reasons that you should buy
            from us. First reason is the quality of our products. Second is the cheap / value
            reason. Third is small business / not corporate with markups. Fourth is reuse
            value. Fifth is customisability. Sixth is innovative tech add ons, like screen. */}
            <div className='fsg-item fsg-item-one'>
              <h4>
                Quality
              </h4>
              <p>
                We use only the best components in our products, so that you can enjoy the best
                audio experience possible.
              </p>
            </div>
            <div className='fsg-item fsg-item-two'>
              <h4>
                Value
              </h4>
              <p>
                We don't mark up our products by much, so that you can get the best value for
                your money.
              </p>
            </div>
            <div className='fsg-item fsg-item-three'>
              <h4>
                Small Business
              </h4>
              <p>
                We are a small business, so you can be sure that your money is going to a good
                place.
              </p>
            </div>
            <div className='fsg-item fsg-item-four'>
              <h4>
                Reuse
              </h4>
              <p>
                Our products are designed to be reused, so that you can get the most out of
                your purchase.
              </p>
            </div>
            <div className='fsg-item fsg-item-five'>
              <h4>
                Customisability
              </h4>
              <p>
                Our products are designed to be customisable, so that you can make them your own.
              </p>
            </div>
            <div className='fsg-item fsg-item-six'>
              <h4>
                Innovation
              </h4>
              <p>
                Our products are designed to be innovative, so that you can enjoy the latest
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
