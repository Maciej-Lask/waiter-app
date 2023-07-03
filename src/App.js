import { Container } from 'react-bootstrap';
import PageNotFound from './components/pages/PageNotFound/PageNotFound.js';
import Home from './components/pages/Home/Home.js';
import Table from './components/pages/Table/Table.js';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/views/Footer/Footer.js';
import Header from './components/views/Header/Header.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux.js';
const App = () => {

  const dispatch = useDispatch();
  useEffect(()=>dispatch(fetchTables()),[dispatch]);

  return (
    <main>
      <Container>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
