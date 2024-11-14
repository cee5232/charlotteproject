import React, { useState } from 'react';
import { UnSdg } from './components/UnSdg';
import { Shuffle } from 'lucide-react';

function App() {
  const [dynamicGoal, setDynamicGoal] = useState(1);

  const handleRandomGoal = () => {
    const newGoal = Math.floor(Math.random() * 17) + 1;
    setDynamicGoal(newGoal);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">UN Sustainable Development Goals</h1>
        
        {/* Dynamic Goal Demo */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl font-semibold">Dynamic Goal Demo</h2>
            <button
              onClick={handleRandomGoal}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Shuffle size={20} />
              Random Goal
            </button>
          </div>
          <UnSdg goal={dynamicGoal} />
        </div>

        {/* All Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 17 }, (_, i) => i + 1).map((num) => (
            <div key={num} className="bg-white p-6 rounded-lg shadow-lg">
              <UnSdg goal={num} />
            </div>
          ))}
        </div>

        {/* Special Variants */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">All Goals Combined</h3>
            <UnSdg goal="all" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">SDG Circle</h3>
            <UnSdg goal="circle" />
          </div>
        </div>

        {/* Color Only Demo */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Color Only Variants</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 17 }, (_, i) => i + 1).map((num) => (
              <UnSdg key={num} goal={num} colorOnly width={80} height={80} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;