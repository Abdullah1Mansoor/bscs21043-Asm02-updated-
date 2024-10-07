import './App.css'
import Navbar from './components/navbar';
import Sidebar from './components/SideBar'
import Calender from './components/Calender'
import Map from './components/Map'
import LatestProjects from './components/LatestProjects';
import Weather from './components/Weather';
import News from './components/News';
// import AnalyticsDashboard from './components/AnalyticsDashboard';
import Quotes from './components/quotes';
import Jokes from './components/Jokes';
import Footer from './components/Footer';
import Profile from './components/Profile';
import IconGallery from './components/IconGallery';
import Chart from './components/Charts';

function App() {
  return (
    <div>
      
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Profile></Profile>
      <IconGallery></IconGallery>
      <Calender></Calender>
      <Map></Map>
      <Chart></Chart>
      <LatestProjects></LatestProjects>
      <Weather></Weather>
      <News></News>    
      {/* <AnalyticsDashboard></AnalyticsDashboard> */}
      <Quotes></Quotes>
      <Jokes></Jokes>
      <Footer></Footer>
      
      
    </div>
  )
}

export default App
