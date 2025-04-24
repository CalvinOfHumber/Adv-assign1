'use client';
import { useState } from "react";

const Hover = () => {
    const [effect, seteffect] = useState(false);

    const style = {
        backgroundColor: effect ? "lightblue" : "white",
        padding: "10px",
        border: "1px solid black",
        cursor: "pointer",
    };

    return (
        <div
            style={style}
            onMouseEnter={() => seteffect(true)}
            onMouseLeave={() => seteffect(false)}
        >
            Hover over me!
        </div>
    );
};

export default Hover;
