import './css/App.css';


import UnleashLeftContent from './compounens/UnleashLeftContent/UnleashLeftContent';
import UnleashRightContent from './compounens/UnleashRightContent/UnleashRightContent';

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
