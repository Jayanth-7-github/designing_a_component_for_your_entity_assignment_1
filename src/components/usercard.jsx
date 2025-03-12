import React from 'react';

const Usercard = ({ profilePhoto, name, mail, phoneNumber, address }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-5 w-80 mx-auto shadow-md text-center font-sans bg-white">
      <div className="mb-4">
        <img 
          src={profilePhoto} 
          alt={`Profile of ${name}`} 
          className="w-24 h-24 rounded-full object-cover mx-auto" 
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 text-sm"><strong>Email:</strong> {mail}</p>
      <p className="text-gray-600 text-sm"><strong>Phone:</strong> {phoneNumber}</p>
      <p className="text-gray-600 text-sm"><strong>Address:</strong> {address}</p>
    </div>
  );
};

// Example usage
export default function App() {
  return (
    <Usercard
      profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLx5gHCUOZlb4dc8A0uWoTJKqYoAA4njfUA&s"
      name="Tony Stank"
      mail="ironman@stark.com"
      phoneNumber="123-456-7890"
      address="Stark Tower,Newyork"
    />
  );
}
