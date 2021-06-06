// import React from 'react';
import user from './common/user.json';
import { Profile } from './components/Profile';

import statisticalData from './common/statistical-data.json';
import { Statistics } from './components/Statistics';

import friends from './common/friends.json';
import { FriendList } from './components/FriendList';

import transactions from './common/transactions.json';
import { TransactionHistory } from './components/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} />; */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
