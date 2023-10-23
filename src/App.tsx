import TextToColor from './pages/TextToColor';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/text-to-color' element={<TextToColor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
