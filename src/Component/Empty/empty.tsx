export const Empty : React.FC<{reason: string}> = ({reason}) => {
    return (
        <div>
            Empty Reason: {reason}
        </div>
    )
}