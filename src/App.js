import './App.css';
import Header from './day-1/Header';
import MainContent from './day-1/MainContent';
import SideNav from './day-1/SideNav';
import Footer from './day-1/Footer';
import './style.css';


function App() {
  return (
    <div>
      <Header title="Header" />
      <div className='ViewWrapper'>
      <SideNav title="SideNav" />
      <MainContent title="MainContent" />
      </div>
      <Footer title="Footer" /> 
    </div>
  );
}

export default App;
