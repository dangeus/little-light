type DownArrowIconProps = {
    size?: number;
}

export default function DownArrowIcon({size = 24}: DownArrowIconProps) {
    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="3 5 14 10" shape-rendering="crispEdges">
            <path fill="#CC6600" d="M5 7H15V9H13V11H11V13H9V11H7V9H5Z"/>
        </svg>
    );
}