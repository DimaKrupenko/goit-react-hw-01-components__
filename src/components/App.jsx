import { User } from 'components/Profile/Profile'
import user from './Profile/user.json'
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json'
import { FriendList } from './FriendList/FriendList'
import friends from './FriendList/friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json'

export const App = () => {
  const { username, tag, location, avatar, stats } = user
  return <div>
    < User
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
    < Statistics title="Upload stats"
      stats={data} />
    < FriendList friends={friends} />
    < TransactionHistory transactions={transactions}/>
  </div>;
};

