import styles from './FriendListItem.module.scss';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const statusClasses = [styles.status];
  if (isOnline) statusClasses.push(styles['is-online']);

  return (
    <li key={id} className={styles.item}>
      <span className={statusClasses.join(' ')}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
