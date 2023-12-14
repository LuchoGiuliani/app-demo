type RepliesCounterProps = {
    count: number;
    onClick?: () => void
}

const RepliesCounter = ({count,onClick}: RepliesCounterProps ) => {
    if(!count || count === 0) {return <div onClick={onClick} className="cursor-pointer">Se el Primero en responder</div>}
    const label = count > 1 ? "respuestas" : "respuesta"
    return <div onClick={onClick}>
    {count} {label}</div>
}
export default RepliesCounter;