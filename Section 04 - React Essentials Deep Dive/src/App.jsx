import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx';
import Header from './components/Header.jsx'

function App() {
  return (
    //Can also use </Fragment> in older versions of React to avoid extra surrounding tags. (was enclosed in a <div></div> before)
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
