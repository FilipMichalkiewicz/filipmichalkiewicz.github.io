
function ArrowIcon(props) {
    return (
        <svg {...props} width={props?.size || 30} height={props?.size || 30} viewBox={`0 0 ${props?.size || 30} ${props?.size || 30}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.28577 4.28572H21.4286L21.4286 4.286L25.617 8.48962L19.4627 14.6217L25.3847 19.4506V25.7143H19.4506V14.6337L8.50778 25.5369L4.31938 21.3333L15.4733 10.2198H4.28577V4.28572Z" fill={props?.color || '#FFFFFF'}/>
        </svg>
    )
}

export {ArrowIcon}

