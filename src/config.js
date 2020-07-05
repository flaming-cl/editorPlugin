import Math from "editorjs-math";
import Color from "editorjs-text-color-plugin";
const colorCollections = ['#FF1300','#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'];
const defaultColor = '#FF1300';
const initData = [
    {
        "type" : "paragraph",
        "data" : {
            "text" : "editor plugin demos",
        }
    },
    {
        "type" : "math",
        "data" : {
            "text" : "\\{1,2,3,\\ldots ,n\\}",
        }
    },
];
const cacheData = localStorage.getItem('blockCache');

export const editorConfig =
    {
        holder: "editorjs",
        tools: {
            math: {
                class: Math,
            },
            Color: {
                class: Color,
                config: {
                    colorCollections,
                    defaultColor,
                    type: 'text',
                }
            },
            Marker: {
                class: Color,
                config: {
                    defaultColor: '#FFBF00',
                    type: 'marker',
                }
            },
        },
        data: { blocks:  cacheData ? JSON.parse(cacheData) : initData }
    };
