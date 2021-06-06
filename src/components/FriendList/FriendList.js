import styles from './FriendList.module.scss';
import { FriendListItem } from '../FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={styles['friend-list']}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);
