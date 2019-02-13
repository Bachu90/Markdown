import React from 'react';
import Toolbar from './Toolbar';

const Editor = props => {
    return(
        <div className="editor-box">
            <header className="title-bar">Markdown Editor</header>
            <Toolbar letters={props.markdown.length} handleClick={props.handleToolClick} />
            <textarea id="editor" onChange={props.handleChange} placeholder={props.placeholder}/>
        </div>
    )
}

export default Editor;