import added from '../assets/added.png';
import { useState } from 'react';

const AddedToCart = () => {
    const [open, setOpen] = useState(true); // Initialize with true to show the modal

    const handleToggle = () => {
        setOpen(!open); // Toggle the open state
    }

    if (!open) {
        return null; // If not open, return nothing (modal is hidden)
    }

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow-lg p-6 w-1/2 h-1/2 mx-4">
                <button className="absolute top-4 right-4 text-3xl" onClick={handleToggle}>
                    &times;
                </button>
                <div className="flex flex-col justify-center items-center mt-20">
                    <img src={added} className='w-20 mb-4' alt="Added to cart" />
                    <h4 className="text-lg text-center font-semibold">Added to Cart</h4>
                </div>
            </div>
        </div>
    );
};

export default AddedToCart;
