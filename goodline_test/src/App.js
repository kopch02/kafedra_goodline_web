import './css/App.css';


import UnleashLeftContent from './components/UnleashLeftContent/UnleashLeftContent';
import UnleashRightContent from './components/UnleashRightContent/UnleashRightContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
      <section>
        <div class="container">
          <div class="unleash-line"></div>
          <div class="unleash-content">
            <UnleashLeftContent/>
            <UnleashRightContent/>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}


export default App;
