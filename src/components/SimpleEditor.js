import { useState } from 'react'
import SimpleColumn from './SimpleColumn'
import PitchSelector from './PitchSelector'

const SimpleEditor = ({ sequence, position, applyPitchPattern, mouseDown, toggleNote }) => {
    const [root, setRoot] = useState(0)
    const [offset, setOffset] = useState(0)

    const getBeat = (row, currentIndex) => {
        let beat = []
        for (let i = 0; i < 4; i++) {
            beat.push(row[currentIndex + i])
        }
        return beat
    }


    const getBeatColumns = () => {
        let beats = []
        for (let i = 0; i < 8; i++) {
            let column = []
            sequence.map((row) => {
                column.push(getBeat(row, i * 4))    
            }) 
            beats.push(column)
        } 
        return beats
    }

    return (
        <div className='simple-editor-view'>
            <div className='menu-objects'>
            <PitchSelector root={root} setRoot={setRoot} setOffset={setOffset} />
            </div>
            <div className='centered-content'>
                <div className='column-container'>
                {sequence.length > 0 ? getBeatColumns().map((column, columnIndex) => {
                    return (
                        <SimpleColumn 
                            key={columnIndex} 
                            columnIndex={columnIndex} 
                            column={column} 
                            position={position} 
                            applyPitchPattern={applyPitchPattern} 
                            mouseDown={mouseDown} 
                            toggleNote={toggleNote}
                            root={root}
                            offset={offset}
                        />
                        )
                    }): <></> }
                </div>
            </div>
        </div>
    )
}

export default SimpleEditor