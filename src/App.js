import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import EditorJS from '@editorjs/editorjs';
import { editorConfig } from './config';

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
    };

  return (
    <div className="App">
      <div
          ref={editor}
          className="editor"
      />
    </div>
  );
}

export default App;
