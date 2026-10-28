type AvatarIconProps = {
    size?: number;
}

export default function AvatarIcon({size = 96}: AvatarIconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 10 10" shapeRendering="crispEdges" aria-hidden="true">
            <rect x="4" y="1" width="2" height="1" fill="#ffb15e"/>
            <rect x="3" y="2" width="4" height="2" fill="#ff9a3c"/>
            <rect x="2" y="4" width="6" height="2" fill="#ff7a2a"/>
            <rect x="4" y="4" width="2" height="2" fill="#ffe9b8"/>
            <rect x="1" y="7" width="8" height="1" fill="#8a4a24"/>
        </svg>
    );
}