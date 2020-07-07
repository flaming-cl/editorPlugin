import React, { useEffect, useState, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Reveal from 'reveal.js';
import { editorConfig } from './config';
import POWER_POINT from '../src/assets/presentation.png';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/dist/reveal.css';
import './App.css';

const App = () => {
    const [slidesData, setSlidesData] = useState([]);
    const editor = useRef();
    const reveal = useRef();
    const slides = useRef();

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

    const initSlides = () => {
        const revealNode = reveal.current;
        // send button to config, add eventlistener for it
        if (revealNode) {
            console.log(revealNode);
            const deckInstance = new Reveal(revealNode, {
                embedded: true,
            } );
            deckInstance.initialize({
                slideNumber: true,
            });
            // config
            deckInstance.configure({
                keyboard: {
                    70: enterFullscreen,
                    27: removeRevealNode, // do something custom when ESC is pressed
                    13: 'next', // go to the next slide when the ENTER key is pressed
                    32: null // don't do anything when SPACE is pressed (i.e. disable a reveal.js default binding)
                }
            });
        }
    };

    const removeRevealNode = () => {
        const pptNode = document.getElementsByClassName('reveal')[0];
        if (pptNode) {
            pptNode.hidden = true;
        }
    };

    const enterFullscreen = () => {
        let element = document.getElementsByClassName('reveal')[0];
        if (element.hidden !== true) {
            element = element || document.documentElement;

            // Check which implementation is available
            const requestMethod = element.requestFullscreen ||
                element.webkitRequestFullscreen ||
                element.webkitRequestFullScreen ||
                element.mozRequestFullScreen ||
                element.msRequestFullscreen;

            if( requestMethod ) {
                requestMethod.apply(element);
            }
        }
    }

    const handleEditorTextChange = async (eNode) => {
        const editorSavedData = await eNode.saver.save();
        const { blocks } = editorSavedData;
        localStorage.setItem('blockCache', JSON.stringify(blocks));
        console.log(blocks);
    };

    const presentEditor = () => {
        const notInitYet = !slidesData.length;
        if (notInitYet) {
            initSlides();
        }
        fillSlidesData();
        reveal.current.hidden = false;
    }

    const fillSlidesData = () => {
        const blocks = document.getElementsByClassName('ce-block');
        const newSlideData = [];
        if (blocks.length) {
            for (var i = 0; i < blocks.length; i++) {
                const singleBlock = blocks[i];
                newSlideData.push(singleBlock.innerHTML);
            }
        }
        setSlidesData(newSlideData);
    };

  return (
    <div className="App">
        <div className="reveal" id="reveal-node" ref={reveal} hidden>
            <div className="slides" ref={slides}>
                { slidesData.length
                    ? slidesData.map((sDetail, i) =>
                        <section key={'slide' + i} dangerouslySetInnerHTML={{__html:sDetail}}/>)
                    : null
                }
            </div>
        </div>
        <section className="editor-wrapper">
            <section>
                <img src={POWER_POINT} className="ppt-btn" onClick={presentEditor} />
            </section>
            <div ref={editor} className="editor"/>
        </section>
    </div>
  );
}

export default App;
