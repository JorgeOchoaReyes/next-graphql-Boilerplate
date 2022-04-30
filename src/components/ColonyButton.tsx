import React from 'react'
import { TiledHexagons } from 'tiled-hexagons'


interface ColonyButtonProps {
    char: string[]
}


export const ColonyButton: React.FC<ColonyButtonProps> = ({char}) => {
    const [scale, setScale] = React.useState(true); 


    const handleTransform = () => {; 
        setScale(!scale); 
    }
    
    return (
            <div className="buttons">
                <button onMouseDown={() => handleTransform()} onMouseUp={() => handleTransform()} >
                    <span style={{transform: `scale(${scale ? 1.1 : .7})`}}  className="blue"><i>{char[0]}</i></span>
                </button>
                <span style={{transform: `scale(${scale ? 1.1 : .4})`}} className="blue"><i>{char[1]}</i></span>
                    <br />
                <span style={{transform: `scale(${scale ? 1.1 : .6})`}} className="blue"><i>{char[2]}</i></span>
                <span style={{transform: `scale(${scale ? 1.1 : .7})`}} className="red"><i>{char[3]}</i></span>
                <span style={{transform: `scale(${scale ? 1.1 : .7})`}} className="blue"><i>{char[4]}</i></span>
                    <br />
                <span style={{transform: `scale(${scale ? 1.1 : .7})`}} className="blue"><i>{char[5]}</i></span>
                <span style={{transform: `scale(${scale ? 1.1 : .7})`}} className="blue"><i>{char[6]}</i></span>
                    <br />
            </div>
    );
}

