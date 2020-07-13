import React from 'react'
import { link } from 'react-router-dom';

export default () => {
    return (
        <div> In some other page!
            <link to="/"> Go back Home</link>
        </div>
    );
};