import React from 'react';

export default ({
    title,
    url,
    description
}) => (
    <div>
        <h2><a href={url}>{title}</a></h2>
        <p>{description}</p>
        <hr />
    </div>
)
