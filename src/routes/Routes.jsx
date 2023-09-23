import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "productDetails/:id",
          element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.id}`)
        },
        {
          path: "cart",
          element: <PrivateRoute><Cart></Cart></PrivateRoute>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;