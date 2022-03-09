import './App.css'
import { Modals } from "./pages/Modals";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home";
import { Nav } from "./components/nav/Nav";
import Containers from './pages/Containers';
import { Layouts } from './pages/Layouts';
import { Onboarding } from './pages/Onboarding';
import { Forms } from './pages/Forms';
function App() {

  return (
    <Router>
      <Nav />
      <div className="app">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/modals' element={<Modals />} />
          <Route path='/containers' element={<Containers />} />
          <Route path='/layouts' element={<Layouts />} />
          <Route path='/onboarding' element={<Onboarding />} />
          <Route path='/forms' element={<Forms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
