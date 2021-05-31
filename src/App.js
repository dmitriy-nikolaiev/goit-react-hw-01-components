// import React from 'react';
import Profile from './components/Profile/Profile';
import user from './common/user.json';

import Statistics from './components/Statistics/Statistics.js';
import statisticalData from './common/statistical-data.json';

function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />;
      {/* <Statistics stats={statisticalData} />; */}
    </div>
  );
}

export default App;
