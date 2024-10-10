import CoreConcept from './components/CoreConcept.jsx'
import Header from './components/Header.jsx'
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data';


function App() {
  function handleSelect() {
      console.log("Hello World - Selected")
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
