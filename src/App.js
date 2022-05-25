import Navbar from './Components/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { PublicRouts } from './Components/Routes/Public';
import Loading from './Components/Shared/Loading/Loading';
import { createContext, useState } from 'react';
import RequireAuth from './Components/Authentication/RequireAuth';
import { DashboardNested, ProtectedRoute } from './Components/Routes/ProtectedRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';


// const userContextFirebase = createContext([]);

function App() {

  // const [user, lading, error] = useAuthState(auth);

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

          {/* ProtectedRoute */}
          <Route element={<RequireAuth />} >
            {
              ProtectedRoute.map(({ path, Component }, i) => <Route key={i} path={path} element={<Component />} ></Route>)
            }
          </Route>


          <Route element={<RequireAuth />} >
            <Route path='/dashboard' element={<Dashboard />}>
              {DashboardNested.map(({ path, Component }, i) => <Route key={i} path={path} element={<Component />} ></Route>)}
            </Route>
          </Route>

        </Routes>





      </Navbar>
    </div>
  );
}

export default App;
