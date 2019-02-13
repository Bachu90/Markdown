import React from 'react';
import Toolbar from './Toolbar';

const Editor = props => {
    return(
        <div class="editor-box">
            <header className="title-bar">Markdown Editor</header>
            <Toolbar letters={props.letters} />
            <textarea id="editor" placeholder={props.placeholder} onChange={props.handleChange}/>
        </div>
    )
}

export default Editor;