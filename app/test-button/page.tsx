'use client';

import { useState } from 'react';

export default function TestButtonPage() {
  const [clickCount, setClickCount] = useState(0);

  const handleTestClick = () => {
    console.log('Test button clicked!');
    alert('Test button clicked! Count: ' + (clickCount + 1));
    setClickCount(clickCount + 1);
  };

  const handleSignOutTest = () => {
    console.log('Signout test button clicked!');
    alert('Signout test button clicked!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Button Test Page</h1>
        
        <div className="space-y-4">
          <button
            onClick={handleTestClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg"
          >
            Test Button (Clicked: {clickCount})
          </button>
          
          <br />
          
          <button
            onClick={handleSignOutTest}
            className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg"
          >
            🚪 Sign Out Test
          </button>
          
          <br />
          
          <button
            onClick={() => alert('Simple alert test')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg"
          >
            Simple Alert Test
          </button>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <p>Click count: {clickCount}</p>
          <p>Check browser console for logs</p>
        </div>
      </div>
    </div>
  );
}
