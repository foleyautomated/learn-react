import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState, Fragment } from 'react'; //React 'Hooks'
import Section from './Section.jsx';
import Tabs from './Tabs'

export default function Examples() {

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
      <Section title="Examples" id="examples">
        <>
          <Tabs
            //ButtonsContainer="menu" //a way to Pass in the identifier for the HTML tag
            buttons={
              (Object.keys(EXAMPLES)).map((concept) => (
                          <TabButton
                              key = {concept} 
                              isSelcted = {selectedTopic === concept} 
                              onSelect = {() => handleSelect(concept)}>{concept.toUpperCase()}
                          </TabButton>
                      )
                  )
            }
          >
          {selectedTopic ?  selectedTabContent : previewTabContent}
          </Tabs>
        </>
        </Section>
    );
}