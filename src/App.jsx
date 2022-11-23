import Condition from './components/Condition';
import './App.css';
import Icon from './components/UI/icon/Icon';
import ArrayOfElements from './components/ArrayOfElements';

function App() {
  return (
    <div className='App container'>
      <h1>App</h1>
      {/* <Condition /> */}
      <Icon dark color='dark'>
        thermometer-quarter
      </Icon>
      <Icon dark>thermometer-half</Icon>
      <Icon dark size='lg'>
        thermometer-full
      </Icon>
      {/* <Icon /> */}
      <ArrayOfElements />
    </div>
  );
}

export default App;
