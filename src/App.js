// import logo from './logo.svg';
import './App.css';
import Paymentcard from './components/paymentcard';
import userdata from "./data/userdata.json"
import styles from "./components/styling.module.css"
// let data={
//   date:"28/10/2020",
  
//   heading:"Amazon Gift",
//   subheading:"Pay",
//   devices:"Desktop-Mobile"
//   }
function App() {
  return (
    <div className='App'>
      <Paymentcard  userdata={userdata}/>
    </div>
  );
}

export default App;
