import '../styles/Home.css';

export const Home = () => {
  return (
    <div className='page-container'>
      <h1 className='welcome-message'>
        Welcome to Z-Audio
      </h1>
      <h2>
        Maximum quality, minimum cost
      </h2>
      <div className='first-section'>
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
          stuff  
        </div>
      </div>
    </div>
  )
}
