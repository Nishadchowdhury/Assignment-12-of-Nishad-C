import Navbar from './Components/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { PublicRouts } from './Components/Routes/Public';

function App() {
  return (
    <div className='max-w-[100rem] mx-auto '>
      <Navbar>

        {/* PublicRouts */}
        <Routes>
          {
            PublicRouts.map(({ path, Component }, i) => <Route key={i} path={path} element={<Component />} ></Route>)
          }


        </Routes>




      </Navbar>
    </div>
  );
}

export default App;
