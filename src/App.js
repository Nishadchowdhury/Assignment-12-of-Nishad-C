import Navbar from './Components/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { PublicRouts } from './Components/Routes/Public';
import Loading from './Components/Shared/Loading/Loading';
import { useState } from 'react';

function App() {

  const [ok, setOK] = useState(true);

  setTimeout(() => {
    setOK(false)
  }, 10);

  if (ok) {
    return <div className="h-screen"><Loading /></div>
  }

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
