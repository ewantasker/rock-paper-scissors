import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home-screen/Home';
import Duel from './pages/duel-screen/Duel';
import Statistics from './pages/statistics-screen/Statistics';
import Help from './pages/support-screen/Help';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="duel" element={<Duel />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
