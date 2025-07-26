import TextToColor from './pages/TextToColor';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/auth' element={<Auth/>} />
          <Route path='/' element={<PrivateRoute>
              <Home />
            </PrivateRoute>} />
          <Route path='/text-to-color' element={<PrivateRoute>
              <TextToColor />
            </PrivateRoute>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
