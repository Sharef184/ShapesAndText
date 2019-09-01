define([], function() {
  'use strict';
  return {
    component: "items",
    label: "Text",
    items: {
        DynamicOutput: {
            ref: "DynamicOutput",
            type: "string",
            label: "Text",
            defaultValue: " "
        }, // \DynamicOutput
        FontColor: {
            ref: "FontColor",
            label: "Font Color",
            type: "string",
            defaultValue: "#000",
        }, // \FontColor
        FontSize: {
            ref: "FontSize",
            label: "Font Size",
            type: "string",
            defaultValue: "18px",
        }, // \FontSize
        PaddingTop: {
            ref: "PaddingTop",
            label: "Padding-Top",
            type: "string",
            defaultValue: "5px",
        } // \PaddingTop
    } // \items
  };
});
