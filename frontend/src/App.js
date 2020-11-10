import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import CalendarBar from './Components/CalendarBar'
import Sidenav from './Components/Sidenav'

function App() {
  return (
      <>
      <Navbar />
      <div className="contentBox">
      <Sidenav id="sidebar"/>
      <CalendarBar />
      </div>
      </>
  );
}

export default App;
