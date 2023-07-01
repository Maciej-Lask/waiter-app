import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className="my-2">
        <h2>All Tables</h2>
        <div className="d-flex justify-content-between border-bottom py-3 my-2">
          <div className='d-flex justify-content-between align-items-center'>
            <h3>Table 1</h3>
            <p className='my-2 mx-4'><b>Status:</b> free</p>
          </div>
          <Link to={`/table/1`} className="btn btn-primary ">
            {' '}
            Show More{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
