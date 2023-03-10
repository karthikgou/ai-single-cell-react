import './App.css';
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'


// import Layouts
import RootLayout from './../layouts/rootLayout'

// import Pages
import GetStarted from './../pages/getStarted'
import Competitions from './../pages/competitions'
import Updates from './../pages/updates'
import Benchmarks from './../pages/benchmarks'
import Leaderboards from './../pages/leaderboards'
import MyData from './../pages/mydata'
import Team from './../pages/team'
import Docs from './../pages/docs'
import Login from './../pages/login'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path='getStarted'   element={<GetStarted />} />
      <Route path="updates"      element={<Updates />} />
      <Route path="competitions" element={<Competitions />}/>
      <Route path="benchmarks"   element={<Benchmarks />}/>
      <Route path="leaderboards" element={<Leaderboards />}/>
      <Route path="mydata"       element={<MyData />}/>
      <Route path="team"         element={<Team />}/>
      <Route path="docs"         element={<Docs />}/>
      <Route path="login"        element={<Login />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
