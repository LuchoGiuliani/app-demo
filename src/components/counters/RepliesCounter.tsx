type RepliesCounterProps = {
    count: number;
    onClick?: () => void
}

const RepliesCounter = ({count,onClick}: RepliesCounterProps ) => {
    if(!count || count === 0) {return <div onClick={onClick} className="cursor-pointer text-white">Se el Primero en responder</div>}
    const label = count > 1 ? "respuestas" : "respuesta"
    return <div className="text-white" onClick={onClick}>
    {count} {label}</div>
}
export default RepliesCounter;