import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import SignIn from "../Components/SignUp&SignIn/SignIn";
import SignUp from "../Components/SignUp&SignIn/SignUp";
import CheckOut from "../Components/Home/ServicesArea/CheckOut";
import CheckOutBox from "../Components/Home/ServicesArea/CheckOutBox";
import ServicesConfirm from "../Components/Home/ServicesArea/ServicesConfirm";
import Bookings from "../Components/Home/ServicesArea/Bookings/Bookings";
import PrivateRoute from "./Provider/PrivateRoute";
import ProductDetails from "../Components/Home/ServicesArea/ProductDetails/ProductDetails";
import CustomerInfo from "../Components/CustomerInfo/CustomerInfo";
import CustomerDetails from "../Components/CustomerInfo/CustomerDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/checkOut/:id",
          element: <PrivateRoute><CheckOut /></PrivateRoute>,
          loader:  ({ params }) => fetch(`http://localhost:5000/carDoctor/${params.id}`)
        },
        {
          path: "/checkOutBox/:id",
          element: <CheckOutBox />,
          loader:  ({ params }) => fetch(`http://localhost:5000/carDoctor/${params.id}`)
        },
        {
          path: "/Service/:id",
          element: <ServicesConfirm />,
          loader:  ({ params }) => fetch(`http://localhost:5000/carDoctor/${params.id}`)
        },
        {
          path: "/myBooking",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:"/productDetails/:id",
          element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/bookingServices/${params.id}`),
        },
        {
          path:"/customerInfo",
          element:<PrivateRoute><CustomerInfo></CustomerInfo></PrivateRoute>
        },
        {
          path:"/customerDetails/:id",
          element:<PrivateRoute><CustomerDetails></CustomerDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`),
        },
      ],
    },
  ]);