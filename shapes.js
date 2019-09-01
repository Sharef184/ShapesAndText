define([], function() {
  'use strict';
  return {
    component: "items",
    label: "Shapes",
    items: {
        BorderColor: {
            ref: "BorderColor",
            label: "Border Color",
            type: "string",
            defaultValue: "#1c4493",
        }, // \BorderColor
        BackgroundColor: {
            ref: "BackgroundColor",
            label: "Background Color",
            type: "string",
            defaultValue: "#fff",
        }, // \BackgroundColor
        OuterBorderRadius: {
            ref: "OuterBorderRadius",
            label: "Outer Border Radius (0 - 40)",
            type: "string",
            defaultValue: "40px",
        }, // \OuterBorderRadius
        InnerBorderRadius: {
            ref: "InnerBorderRadius",
            label: "Inner Border Radius (0 - 40)",
            type: "string",
            defaultValue: "40px",
        } // \InnerBorderRadius
    } // \items
  };
});
