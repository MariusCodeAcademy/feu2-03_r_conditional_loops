import Condition from './components/Condition';
import './App.css';
import Icon from './components/UI/icon/Icon';

function App() {
  return (
    <div className='App container'>
      <h1>App</h1>
      {/* <Condition /> */}
      <Icon color='dark'>thermometer-quarter</Icon>
      <Icon color='light'>thermometer-half</Icon>
      <Icon size='lg'>thermometer-full</Icon>
      {/* <Icon /> */}
    </div>
  );
}

export default App;
