'use client';
import { useState } from "react";

const FilteredList = () => {
    const [filter, setFilter] = useState("active");

    const items = [
        { id: 1, name: "Item 1", active: true },
        { id: 2, name: "Item 2", active: false },
        { id: 3, name: "Item 3", active: true },
        { id: 4, name: "Item 4", active: false },
    ];

    const filteredItems = items.filter((item) => item.active === (filter === "active"));

    return (
        <div>
            <button onClick={() => setFilter("active")}>Show Active</button>
            <button onClick={() => setFilter("inactive")}>Show Inactive</button>
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilteredList;

