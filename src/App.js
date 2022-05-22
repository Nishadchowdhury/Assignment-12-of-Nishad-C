import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Home/Navbar';
// import { PublicRouts } from './Components/Routes/Public/PublicRouts'
import { Route, Routes } from 'react-router-dom';
import { PublicRouts } from './Components/Routes/Public';

function App() {
  return (
    <Navbar>

      {/* PublicRouts */}
      <Routes>
        {
          PublicRouts.map(({ path, Component }, i) => <Route key={i} path={path} element={<Component />} ></Route>)
        }


      </Routes>




    </Navbar>
  );
}

export default App;
