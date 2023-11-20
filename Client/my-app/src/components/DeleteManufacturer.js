import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 

const DeleteManufacturer = ({ manufacturerId }) => {
    const history = useHistory();

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/api/v1/manufacturers/${manufacturerId}`)
            .then(response => {
                console.log(response);
                // Redirect or perform UI update after deletion
                history.push('/manufacturers');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Delete Manufacturer</h1>
            <p>Are you sure you want to delete this manufacturer?</p>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete Manufacturer
            </button>
        </div>
    );
};

export default DeleteManufacturer;
