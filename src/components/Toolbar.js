import React from 'react';

// library.add(faBold, faItalic, faImages, faLink, faQuoteLeft, faListUl, faListOl);

const Toolbar = props => {
    
    return(
        <div className="toolbar">
        <button id="bold" data-symbol="**{your text}**" onClick={props.handleClick}><i className="fas fa-bold"></i></button>
        <button id="italic" data-symbol="_{your text}_" onClick={props.handleClick}><i className="fas fa-italic"></i></button>
        <button id="image" data-symbol="![{alt text}]({url})" onClick={props.handleClick}><i className="fas fa-images"></i></button>
        <button id="link" data-symbol="[{link text}]({url})" onClick={props.handleClick}><i className="fas fa-link"></i></button>
        <button id="quote" data-symbol="> {your text}" onClick={props.handleClick}><i className="fas fa-quote-right"></i></button>
        <button id="strike-through" data-symbol="~~{your text}~~" onClick={props.handleClick}><i className="fas fa-strikethrough"></i></button>
        <button id="h1" data-symbol="# {your text}" onClick={props.handleClick}><i>H1</i></button>
        <button id="h2" data-symbol="## {your text}" onClick={props.handleClick}><i>H2</i></button>
        <button id="h3" data-symbol="### {your text}" onClick={props.handleClick}><i>H3</i></button>
        <button id="h4" data-symbol="#### {your text}" onClick={props.handleClick}><i>H4</i></button>
        <button id="h5" data-symbol="##### {your text}" onClick={props.handleClick}><i>H5</i></button>
        <button id="h6" data-symbol="###### {your text}" onClick={props.handleClick}><i>H6</i></button>
        <span id="letters">{props.letters}</span>
        </div>
    )
}

export default Toolbar;