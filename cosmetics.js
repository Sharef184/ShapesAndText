define( ["./shapes","./text"], function (shapes,text) {
    'use strict';
    return {
        component: "expandable-items",
        label: "Customization",
        items: {
            shapes: shapes,
            text:text
        }
    };
});
