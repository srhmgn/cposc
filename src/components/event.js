import React from 'react';

export default ({
    title,
    date,
    url,
    location: {lon, lat}
}) => (
    <table>
        <thead>
            <tr><th>Title</th><td>{title}</td></tr>
        </thead>
        <tbody>
            <tr><th>Date</th><td>{date}</td></tr>
            <tr><th>URL</th><td><a href={url}>{url}</a></td></tr>
            <tr><th>Location</th><td>{lon} {lat}</td></tr>
        </tbody>
    </table>
)
