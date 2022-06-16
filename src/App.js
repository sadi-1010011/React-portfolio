import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';
import RecentWorks from './components/RecentWorks/RecentWorks';
import ActionBtn from './components/ActionBtn';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <RecentWorks />
      <div className='container'>
        <div className='row p-5'>
          <div className='col'>
            <ActionBtn color='cyan' textcolor='black'>See my works</ActionBtn>
            <ActionBtn color='darkslategrey'>contact me</ActionBtn>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
