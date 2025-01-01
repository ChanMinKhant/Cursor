import React from 'react';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div>
      <h1>Custom Cursor with PNG</h1>
      <p>Move your cursor around to see the custom image follow.</p>
      <CustomCursor />
    </div>
  );
};

export default App;
