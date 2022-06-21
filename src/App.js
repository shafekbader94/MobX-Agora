import { observer } from 'mobx-react'
import './App.css';
import Market from './components/Market';

function App(props) {
  return (
    <div className="App">
  <Market />    
    </div>
  );
}

export default observer(App);
