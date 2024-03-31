import './css/App.css';


import UnleashLeftContent from './components/UnleashLeftContent/UnleashLeftContent';
import UnleashRightContent from './components/UnleashRightContent/UnleashRightContent';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import ExploreTrending from './components/ExploreTrending/ExploreTrending';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <section>
        <ExploreTrending/>
      </section>

      <section>
        <div class="container">
          <div class="unleash-line"></div>
          <div class="unleash-content">
            <UnleashLeftContent/>
            <UnleashRightContent/>
          </div>
        </div>
      </section>

      <section>
        <Banner/>
      </section>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}


export default App;
