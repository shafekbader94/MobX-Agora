import { observer } from 'mobx-react'
import './App.css';
import Market from './components/Market';

function App(props) {
  return (
    <div className="App">
  <Market store = {props.store}/>    
    </div>
  );
}

export default observer(App);
