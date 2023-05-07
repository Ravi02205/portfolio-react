import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layouts/index';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  },
]);


function App() {
  return (

    <RouterProvider router={routes} />

  );
}

export default App;
