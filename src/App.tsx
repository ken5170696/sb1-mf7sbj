import React from 'react';
import { Heart, Paw } from 'lucide-react';

interface Puppy {
  name: string;
  breed: string;
  age: string;
  imageUrl: string;
}

const puppies: Puppy[] = [
  {
    name: 'Max',
    breed: 'Golden Retriever',
    age: '3 months',
    imageUrl: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Luna',
    breed: 'Labrador',
    age: '2 months',
    imageUrl: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Charlie',
    breed: 'Beagle',
    age: '4 months',
    imageUrl: 'https://images.unsplash.com/photo-1612502169027-5a379283f9c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2 flex items-center justify-center">
            <Paw className="mr-2" /> Puppy Pals
          </h1>
          <p className="text-xl text-gray-600">Meet our adorable furry friends!</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puppies.map((puppy) => (
            <div key={puppy.name} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={puppy.imageUrl} alt={puppy.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{puppy.name}</h2>
                <p className="text-gray-600 mb-1"><strong>Breed:</strong> {puppy.breed}</p>
                <p className="text-gray-600 mb-4"><strong>Age:</strong> {puppy.age}</p>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors duration-300 flex items-center">
                  <Heart className="mr-2" /> Adopt Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;