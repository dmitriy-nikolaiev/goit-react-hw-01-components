import ReactDOM from 'react-dom';

import './styles.scss';

import Profile from './Profile';
import user from './user.json';

const profileElement = (
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
);
ReactDOM.render(profileElement, document.getElementById('root'));
