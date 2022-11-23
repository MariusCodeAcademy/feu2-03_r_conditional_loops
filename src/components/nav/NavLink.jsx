import './NavLink.css';
import Icon from './../UI/icon/Icon';

// susikurti nauja komponenta NavLink
function NavLink(props) {
  return (
    <a className={`navLink ${props.isCurrent ? 'current' : ''}`} href={props.to}>
      <Icon>{props.icon}</Icon> {props.children}
    </a>
  );
}
// exportotuoti NavLink
export default NavLink;

// panaudoti NavLink Navigation.jsx sugeneruoti navigacijai
