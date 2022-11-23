import './Navigation.css';
import NavLink from './NavLink';

function Navigation() {
  // susikurti nauja komponenta
  return (
    <header className='mainHeader'>
      <nav className='container'>
        <NavLink to='#home'>Home</NavLink>
        <NavLink to='#about'>About</NavLink>
      </nav>
    </header>
  );
}

// exportotuoti
export default Navigation;

// importuoti i App.jsx

// sukurti ir aprasyti nav kaip pavyzdyje https://www.w3schools.com/w3css/tryw3css_templates_band.htm
