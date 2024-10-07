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
import ScrollToTop from './components/ScrollToTop'; 
import UserActivity from './components/UserActivity';
import Todos from './components/TodoList';
import SearchBar from './components/SearchBar';
// import DishCard from './components/DishCard';
import LiveMenu from './components/LiveMenu';

function App() {
  return (
    <div>
      
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Profile></Profile>
      <SearchBar></SearchBar>
      <IconGallery></IconGallery>
      <Todos></Todos>
      <Calender></Calender>
      <Map></Map>
      <Chart></Chart>
      <LatestProjects></LatestProjects>
      <Weather></Weather>
      <News></News>
      <LiveMenu></LiveMenu>    
      {/* <AnalyticsDashboard></AnalyticsDashboard> */}
      <Quotes></Quotes>
      <UserActivity></UserActivity>
      {/* <DishCard></DishCard> */}
      <Jokes></Jokes>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>      
      
    </div>
  )
}

export default App
