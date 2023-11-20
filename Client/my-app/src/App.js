import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Components
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import EditCar from './components/EditCar';
import ManufacturerList from './components/ManufacturerList';
import AddManufacturer from './components/AddManufacturer';
import EditManufacturer from './components/EditManufacturer';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav className="p-4 bg-gray-200">
          <Link to="/cars" className="mr-4">Cars</Link>
          <Link to="/manufacturers">Manufacturers</Link>
          <Link to="/cars/add" className="ml-4">Add Car</Link>
          <Link to="/manufacturers/add" className="ml-4">Add Manufacturer</Link>
          <Link to="/cars/edit/:id" className="ml-4">Edit Car</Link>
          <Link to="/manufacturers/edit/:id" className="ml-4">Edit Manufacturer</Link>
          {/* <Link to="/cars/delete/:id" className="ml-4">Delete Car</Link>
          <Link to="/manufacturers/delete/:id" className="ml-4">Delete Manufacturer</Link> */}
        </nav>

        {/* Route Configuration */}
        <Routes>
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/add" element={<AddCar />} />
          <Route path="/cars/edit/:id" element={<EditCar />} />

          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/manufacturers/add" element={<AddManufacturer />} />
          <Route path="/manufacturers/edit/:id" element={<EditManufacturer />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
