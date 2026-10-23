"use client"

import {useState} from "react";

type SparkButtonProps = {
    initialSparks: number;
}

export default function SparkButton({initialSparks}: SparkButtonProps) {
    const [hasSpark, setHasSpark] = useState(false);

    const sparks = hasSpark ? initialSparks + 1 : initialSparks;

    function handleSpark() {
        setHasSpark(h => !h);
    }

    return (
        <button type="button" onClick={handleSpark}
                className={
                    hasSpark
                        ? "text-accent"
                        : "hover:text-accent-pale active:text-accent-light"
                }>{sparks} sparks</button>
    )
}