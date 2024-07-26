// src/components/Connections.js

import React, { useState, useEffect } from 'react';

const Connections = () => {
    const [connections, setConnections] = useState([]);

    useEffect(() => {
        // Fetch data from your API
        fetch('http://localhost:3000/api/connections')
            .then(response => response.json())
            .then(data => setConnections(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Connections</h2>
            <ul>
                {connections.map(connection => (
                    <li key={connection.id}>
                        <h3>First Name: </h3> {connection.first_name}<br />
                        <h3>Last Name: </h3> {connection.last_name}<br /> 
                        <h3>Relationship Type: </h3> {connection.relationship}<br /> 
                        <h3>CreatedAt: </h3> {connection.createdAt}<br />
                        <h3>UpdatedAt: </h3> {connection.updatedAt}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Connections;
