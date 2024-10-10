import CoreConcept from './components/CoreConcept.jsx'
import Header from './components/Header.jsx'
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import { useState } from 'react'; //React 'Hooks'


function App() {
  const [selectedTopic, setSelectedTopic] = useState(); //Was `useState('components') before we decided to remove the initial value

  function handleSelect(selectedMenuButton) {
    setSelectedTopic(selectedMenuButton);
    console.log("Hello World - Selected Topic: " + selectedMenuButton)
  }
  
  const previewTabContent = <p>please select a topic</p>
  const selectedTabContent = selectedTopic ? (
    <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
  ) : null;              

  


  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => <CoreConcept {...item} />)}
        </ul>
        </section>
        <section id="examples">
          <menu>
            {
              (Object.keys(EXAMPLES)).map((concept) => (
                  <TabButton 
                    isSelcted = {selectedTopic === concept} 
                    onSelect = {() => handleSelect(concept)}>{concept.toUpperCase()}
                  </TabButton>
                )
              )
            }
          </menu>
          {selectedTopic ?  selectedTabContent : previewTabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
