import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 

const DeleteCar = ({ carId }) => {
    const history = useHistory();

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/api/v1/cars/${carId}`)
            .then(response => {
                console.log(response);
                // Redirect or perform UI update after deletion
                history.push('/cars');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Delete Car</h1>
            <p>Are you sure you want to delete this car?</p>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete Car
            </button>
        </div>
    );
};

export default DeleteCar;
