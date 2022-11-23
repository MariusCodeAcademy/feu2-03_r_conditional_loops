import './Icon.css';

function Icon(props) {
  let iconClassStr = 'fa fa-';
  iconClassStr += props.children;
  // jei size='lg' tai pridedam klase fa-3x kitu atveju nieko
  iconClassStr += props.size === 'lg' ? ' fa-4x' : ' fa-2x';
  // if (props.size === 'lg') iconClassStr += ' fa-3x';

  iconClassStr += props.dark ? ' inverted' : '';

  // patikrinima ar komponentas gavo klase tarp pradzios ir pabaigos tagu
  if (!props.children) {
    return <i className='fa fa-times-circle fa-3x' aria-hidden='true'></i>;
  }

  return <i className={iconClassStr} aria-hidden='true'></i>;
}
export default Icon;
