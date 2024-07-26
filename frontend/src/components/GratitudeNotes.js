// src/components/Connections.js

import React, { useState, useEffect } from 'react';

const GratitudeNotes = () => {
    const [gratitudeNotes, setGratitudeNotes] = useState([]);

    useEffect(() => {
        // Fetch data from your API
        fetch('http://localhost:3000/api/gratitudenotes')
            .then(response => response.json())
            .then(data => setGratitudeNotes(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Gratitude Notes</h2>
            <ul>
                {gratitudeNotes.map(gratitudeNote => (
                    <li key={gratitudeNote.id}>
                        <h3>First Name: </h3> {gratitudeNote.note}<br />
                        <h3>CreatedAt: </h3> {gratitudeNote.createdAt}<br />
                        <h3>UpdatedAt: </h3> {gratitudeNote.updatedAt}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GratitudeNotes;
