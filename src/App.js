import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Slides from 'editorjs-slides-component';
import { editorConfig } from './config';
import './App.css';

const App = () => {
    const editor = useRef();

    useEffect(() => {
        initEditor();
    }, []);

    const initEditor = () => {
        if (editor.current) {
            editor.current.id = "editorjs";
            const editorInstance = new EditorJS(editorConfig);
            editorConfig.onChange = () => {
                handleEditorTextChange(editorInstance);
            }
        }
    };

    const handleEditorTextChange = async (eNode) => {
        const editorSavedData = await eNode.saver.save();
        const { blocks } = editorSavedData;
        localStorage.setItem('blockCache', JSON.stringify(blocks));
        console.log(blocks);
    };

  return (
    <div className="App">
        <section className="editor-wrapper">
            {/*<Slides btnClassName="slides-btn-wrapper"/>*/}
            <div ref={editor} className="editor"/>
        </section>
    </div>
  );
}

export default App;
