
// import { Feather } from 'react-feather'; // Assuming you're using react-feather for icons
// import 'simplebar'; // If using simplebar for scrolling behavior
// import 'simplebar/dist/simplebar.css'; // SimpleBar CSS for custom scrollbar styling
// import './navbar.css'; // Custom CSS for the sidebar
// const Sidebar = () => {
//   return (
//     <nav id="sidebar" className="sidebar js-sidebar">
//       <div className="sidebar-content js-simplebar">
//         <a className="sidebar-brand" href="index.html">
//           <span className="align-middle">AdminKit</span>
//         </a>

//         <ul className="sidebar-nav">
//           <li className="sidebar-header">Pages</li>

//           <li className="sidebar-item active">
//             <a className="sidebar-link" href="index.html">
//               <Feather icon="sliders" className="align-middle" /> <span className="align-middle">Dashboard</span>
//             </a>
//           </li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="pages-profile.html">
//               <Feather icon="user" className="align-middle" /> <span className="align-middle">Profile</span>
//             </a>
//           </li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="pages-sign-in.html">
//               <Feather icon="log-in" className="align-middle" /> <span className="align-middle">Sign In</span>
//             </a>
//           </li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="pages-sign-up.html">
//               <Feather icon="user-plus" className="align-middle" /> <span className="align-middle">Sign Up</span>
//             </a>
//           </li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="pages-blank.html">
//               <Feather icon="book" className="align-middle" /> <span className="align-middle">Blank</span>
//             </a>
//           </li>

//           <li className="sidebar-header">Tools & Components</li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="ui-buttons.html">
//               <Feather icon="square" className="align-middle" /> <span className="align-middle">Buttons</span>
//             </a>
//           </li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="ui-forms.html">
//               <Feather icon="check-square" className="align-middle" /> <span className="align-middle">Forms</span>
//             </a>
//           </li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="ui-cards.html">
//               <Feather icon="grid" className="align-middle" /> <span className="align-middle">Cards</span>
//             </a>
//           </li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="ui-typography.html">
//               <Feather icon="align-left" className="align-middle" /> <span className="align-middle">Typography</span>
//             </a>
//           </li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="icons-feather.html">
//               <Feather icon="coffee" className="align-middle" /> <span className="align-middle">Icons</span>
//             </a>
//           </li>

//           <li className="sidebar-header">Plugins & Addons</li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="charts-chartjs.html">
//               <Feather icon="bar-chart-2" className="align-middle" /> <span className="align-middle">Charts</span>
//             </a>
//           </li>

//           <li className="sidebar-item">
//             <a className="sidebar-link" href="maps-google.html">
//               <Feather icon="map" className="align-middle" /> <span className="align-middle">Maps</span>
//             </a>
//           </li>
//         </ul>

//         <div className="sidebar-cta">
//           <div className="sidebar-cta-content">
//             <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
//             <div className="mb-3 text-sm">
//               Are you looking for more components? Check out our premium version.
//             </div>
//             <div className="d-grid">
//               <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;

import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.css';
import { Home, User, LogIn, FileText, Grid, List, File, CheckSquare, BarChart2, MapPin } from "react-feather";  // Icons
import './navbar.css';
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <div className="sidebar-header">
          <h1>AdminKit</h1>
        </div>

        <nav className="sidebar">
          <ul>
            <li className="sidebar-section">Pages</li>
            <li className="sidebar-item"><Home /> Dashboard</li>
            <li className="sidebar-item"><User /> Profile</li>
            <li className="sidebar-item"><LogIn /> Sign In</li>
            <li className="sidebar-item"><User /> Sign Up</li>
            <li className="sidebar-item"><FileText /> Blank</li>

            <li className="sidebar-section">Tools & Components</li>
            <li className="sidebar-item"><CheckSquare /> Buttons</li>
            <li className="sidebar-item"><List /> Forms</li>
            <li className="sidebar-item"><File /> Cards</li>
            <li className="sidebar-item"><Grid /> Typography</li>
            <li className="sidebar-item"><FileText /> Icons</li>

            <li className="sidebar-section">Plugins & Addons</li>
            <li className="sidebar-item"><BarChart2 /> Charts</li>
            <li className="sidebar-item"><MapPin /> Maps</li>
          </ul>
        </nav>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
