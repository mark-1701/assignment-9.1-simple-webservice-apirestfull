import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='has-background-success p-5 is-flex is-justify-content-space-between is-align-items-center	'>
      <h1 className='title is-5 mb-0'>Sistema usando API Restfull</h1>
      <Link to="/" className='button'>🏠 Menú</Link>
    </div>
  )
}

export default Banner
