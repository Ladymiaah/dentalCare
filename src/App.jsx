import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import DoctorsPage from "./pages/doctors";
import PricingPage from "./pages/Pricing";
import AboutUsPage from "./pages/AboutUs";
import ContactsPage from "./pages/Contacts";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "Services", element: <ServicesPage /> },
      { path: "Doctors", element: <DoctorsPage /> },
      { path: "Pricing", element: <PricingPage /> },
      { path: "About Us", element: <AboutUsPage /> },
      { path: "Contacts", element: <ContactsPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="min-h-screen flex p-10 justify-center">
      <div className="bg-[#f4f5f7] p-10 rounded-lg shadow-lg ">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
