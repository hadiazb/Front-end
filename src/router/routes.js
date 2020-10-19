import Dashboard from '../components/pages/Dashboard';

// Este es un arreglo donde irán todas las rutas de nuestra App ;)
const ROUTES = [
  {
    path: ['/', '/dashboard'], // could be an array or an string
    key: 'LOGIN',
    exact: true,
    component: Dashboard,
    auth: false,
  }
];

export default ROUTES;
