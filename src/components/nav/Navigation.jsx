import './Navigation.css';
import NavLink from './NavLink';

function Navigation(props) {
  // susikurti nauja komponenta
  return (
    <header className='mainHeader'>
      <nav className='container'>
        {props.navItems.map((nObj) => (
          <NavLink key={nObj.id} to={nObj.to} icon={nObj.icon} isCurrent={nObj.active}>
            {nObj.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

// exportotuoti
export default Navigation;

// importuoti i App.jsx

// sukurti ir aprasyti nav kaip pavyzdyje https://www.w3schools.com/w3css/tryw3css_templates_band.htm
