import React from 'react';

import { Link } from 'react-router-dom';

function MediumSofa() {
    return (
        <div>
            <h1>Sofas</h1>
            <Link to="/respaldo-options/sofa-ejemplos"><p>Nuestros Modelos</p></Link>
            <Link to="/respaldo-options/sofa-builder"><p>Personalizalo</p></Link>
        </div>
    )
}

export default MediumSofa;
