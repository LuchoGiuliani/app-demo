type PostCounterProps = {
    count: number;
}

const PostCounter = ({count}: PostCounterProps ) => {
    const label = count > 1 ? "posteos" : "posteo"
    return <>
    {count} {label}</>
}
export default PostCounter;