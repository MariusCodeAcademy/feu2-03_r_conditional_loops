import './NavLink.css';

// susikurti nauja komponenta NavLink
function NavLink(props) {
  return (
    <a className='navLink' href={props.to}>
      {props.children}
    </a>
  );
}
// exportotuoti NavLink
export default NavLink;

// panaudoti NavLink Navigation.jsx sugeneruoti navigacijai
