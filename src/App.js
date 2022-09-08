import React from 'react';
import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';
import RecentWorks from './components/RecentWorks/RecentWorks';
import TechStack from './components/TechStack/TechStack';
import ScreenShots from './components/ScreenShots/ScreenShots';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <RecentWorks />
      <TechStack />
      <ScreenShots />
      <Footer />
    </div>
  );
}

export default App;
