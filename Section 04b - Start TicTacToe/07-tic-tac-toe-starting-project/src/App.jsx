import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import {useState} from "react"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handlePlayerSwitch() {
    setActivePlayer((currentlyActivePlayer) => {
      console.log(`Changin Active Player from ${currentlyActivePlayer}...`)
      return currentlyActivePlayer === 'X' ? 'O' : 'X'
      
    })
  }
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="O" isActive={activePlayer === 'X'}/>
          <Player name="Player 2" symbol="X" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onPlayerSwitch={handlePlayerSwitch} activePlayerSymbol={activePlayer}></GameBoard>
      </div>
    </main>
  )
}

export default App
