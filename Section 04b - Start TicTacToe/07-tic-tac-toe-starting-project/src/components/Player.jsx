import { useState } from 'react';

export default function Player({name, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)

    function toggleEdit() {
        setIsEditing((editing) => !editing)
    }
    function saveOrEditButtonText() {
        return isEditing ? "Save" : "Edit"
    }
    function handleChange(event) {
        setPlayerName(event.target.value) //'event' comes from the 'onChange' prop, and it has; Example of 'two-way-binding'
    }
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {!isEditing && <span className="player-name" >{playerName}</span>}
                {isEditing && <input type="text" required value={playerName} onChange={handleChange}/>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={toggleEdit}>{saveOrEditButtonText()}</button>
      </li>
    )
}