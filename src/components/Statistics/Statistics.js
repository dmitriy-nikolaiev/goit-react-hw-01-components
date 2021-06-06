import styles from './Statistics.module.scss';

const getColor = () => ({
  background:
    '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
});

export const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles['stat-list']}>
      {stats.map(stat => (
        <li key={stat.id} className={styles.item} style={getColor()}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};
