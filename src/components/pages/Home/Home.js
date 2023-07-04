import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const tables = useSelector(getTables);

  useEffect(() => {
 
      setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="my-2">
        <h2>All Tables</h2>
        {tables.map((table) => (
          <div
            key={table.id}
            className="d-flex justify-content-between border-bottom py-3 my-2"
          >
            <div className="d-flex justify-content-between align-items-center">
              <h3>Table {table.id}</h3>
              <p className="my-2 mx-4">
                <b>Status:</b> {table.status}
              </p>
            </div>
            <Link to={`/table/${table.id}`} className="btn btn-primary">
              Show More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
