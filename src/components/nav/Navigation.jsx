import './Navigation.css';

function Navigation() {
  // susikurti nauja komponenta
  return (
    <header className='mainHeader'>
      <nav className='container'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
      </nav>
    </header>
  );
}

// exportotuoti
export default Navigation;

// importuoti i App.jsx

// sukurti ir aprasyti nav kaip pavyzdyje https://www.w3schools.com/w3css/tryw3css_templates_band.htm
