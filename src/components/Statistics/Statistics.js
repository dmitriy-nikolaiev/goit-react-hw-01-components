import './Statistics.scss';

const Statistic = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistic.defaultProps = {
  title: '',
};

export default Statistic;
