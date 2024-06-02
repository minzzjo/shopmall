import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import ProtectedRoute from './routes/ProtectedRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/products', element: <Products /> },
			{ path: '/products/new', element: (<ProtectedRoute requireAdmin><NewProduct /></ProtectedRoute>) },
			{ path: 'products/:id', element: <ProductDetail /> },
			{ path: '/carts', element: (<ProtectedRoute><MyCart /></ProtectedRoute>) },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
