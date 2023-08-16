import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTableById, getTables } from '../../../redux/tablesRedux';
// import { editTable } from '../../../redux/tablesRedux';
import { editTableRequest } from '../../../redux/tablesRedux';
import { useDispatch } from 'react-redux';
import styles from './Table.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Table = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tables = useSelector(getTables);
  const table = useSelector((state) => getTableById(state, id));
  console.log(table);
  useEffect(() => {
    if (table) {
      setStatus(table.status);
      setBill(table.bill);
      setPeopleCurrent(table.peopleCurrent);
      setPeopleMax(table.peopleMax);
    }
  }, [table]);
  const tableIsValid = tables.some((table) => table.id === id);
  // console.log(tableIsValid);

  const [status, setStatus] = useState(table?.status || 'Free');
  const [bill, setBill] = useState(table?.bill || 0);
  const [peopleCurrent, setPeopleCurrent] = useState(table?.peopleCurrent || 0);
  const [peopleMax, setPeopleMax] = useState(table?.peopleMax || 10);
  
  if (!table || !tableIsValid) {
    navigate('/');
    return <div>Loading...</div>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedValues = { id, status, bill, peopleCurrent, peopleMax };

    dispatch(editTableRequest(updatedValues));

    navigate('/');
  };

  const handlePeopleCurrentChange = (e) => {
    let newPeopleCurrent = Number(e.target.value);

    if (newPeopleCurrent > peopleMax) {
      newPeopleCurrent = peopleMax;
    }

    if (newPeopleCurrent < 0) {
      newPeopleCurrent = 0;
    } else if (newPeopleCurrent > 10) {
      newPeopleCurrent = 10;
    }

    setPeopleCurrent(newPeopleCurrent);
  };

  const handlePeopleMaxChange = (e) => {
    let newPeopleMax = Number(e.target.value);

    if (newPeopleMax < 0) {
      newPeopleMax = 0;
    } else if (newPeopleMax > 10) {
      newPeopleMax = 10;
    }

    if (newPeopleMax < peopleCurrent) {
      setPeopleCurrent(newPeopleMax);
    }

    setPeopleMax(newPeopleMax);
  };
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    if (newStatus === 'Cleaning' || newStatus === 'Free') {
      setPeopleCurrent(0);
    }
    if (newStatus !== 'Busy') {
      setBill(0);
    }
    if (newStatus === table.status) {
      setPeopleCurrent(table.peopleCurrent);
      setBill(table.bill);
      setPeopleMax(table.peopleMax);
    }
  };

  const isBusy = status === 'Busy';

  return (
    <div>
      <h2>Table {id}</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="my-3">
          <b className="col-md-1 my-2">Status:</b>
          <Form.Group className="col-md-3" controlId="status">
            <Form.Select
              aria-label="Default select example"
              onChange={handleStatusChange}
              value={status}
            >
              <option value="Free">Free</option>
              <option value="Busy">Busy</option>
              <option value="Reserved">Reserved</option>
              <option value="Cleaning">Cleaning</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="my-3">
          <b className="col-md-1 my-2">People:</b>
          <Form.Group className="col-md-3" controlId="people">
            <div className="d-flex align-items-center ">
              <Form.Control
                className={styles.thinInput}
                type="number"
                value={peopleCurrent}
                onChange={handlePeopleCurrentChange}
              />
              <p className="my-0 mx-2">/</p>
              <Form.Control
                className={styles.thinInput}
                type="number"
                value={peopleMax}
                onChange={handlePeopleMaxChange}
              />
            </div>
          </Form.Group>
        </Row>
        {isBusy && (
          <Row className="my-3">
            <b className="col-md-1 my-2">Bill:</b>
            <Form.Group className="col-md-2" controlId="bill">
              <div className="input-group">
                <span className="m-2">$</span>
                <Form.Control
                  className={styles.thinInput}
                  type="number"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                />
              </div>
            </Form.Group>
          </Row>
        )}
        <Button className="my-3" variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Table;
