// src/components/Memories.js

import React, { useState, useEffect } from 'react';

const Memories = () => {
    const [memories, setMemories] = useState([]);

    useEffect(() => {
        // Fetch data from your API
        fetch('http://localhost:3000/api/memories')
            .then(response => response.json())
            .then(data => setMemories(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Memories</h2>
            <ul>
                {memories.map(memory => (
                    <li key={memory.id}>
                        <h3>Experience: </h3> {memory.experience}<br />
                        <h3>Reflection: </h3> {memory.reflection}<br /> 
                        <h3>CreatedAt: </h3> {memory.createdAt}<br />
                        <h3>UpdatedAt: </h3> {memory.updatedAt}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Memories;
