import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faImages, faLink, faQuoteLeft, faListUl, faListOl } from '@fortawesome/free-solid-svg-icons';

library.add(faBold, faItalic, faImages, faLink, faQuoteLeft, faListUl, faListOl);

const Toolbar = props => {
    return(
        <div className="toolbar">
        <button id="bold"><FontAwesomeIcon icon="bold" /></button>
        <button id="italic"><FontAwesomeIcon icon="italic" /></button>
        <button id="image"><FontAwesomeIcon icon="images" /></button>
        <button id="link"><FontAwesomeIcon icon="link" /></button>
        <button id="quote"><FontAwesomeIcon icon="quote-left" /></button>
        <button id="list-ul"><FontAwesomeIcon icon="list-ul" /></button>
        <button id="list-ol"><FontAwesomeIcon icon="list-ol" /></button>
        <button id="h1">H1</button>
        <button id="h2">H2</button>
        <button id="h3">H3</button>
        <button id="h4">H4</button>
        <button id="h5">H5</button>
        <button id="h6">H6</button>
        <span id="letters">{props.letters}</span>
        </div>
    )
}

export default Toolbar;