import SimplePitchCell from './SimplePitchCell'

const SimplePitchRow = ({ root, row, rowIndex, position, columnIndex }) => {
    return (
        <div className='simple-pitch-row' >
            {row.map((note, noteIndex) => {
                return (
                    <SimplePitchCell root={root} key={noteIndex} note={note} noteIndex={noteIndex} sequenceIndex={noteIndex + (columnIndex * 4)} position={position} />
                )
            })}
        </div>
    )
}

export default SimplePitchRow