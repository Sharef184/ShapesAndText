define( ["./cosmetics"], function (cosmetics) {
    'use strict';
    
    var appearancePanel = { uses: "settings" };
    
    return {
        type: "items",
        component: "accordion",
        items: {
            cosmetics: cosmetics,
            appearance: appearancePanel
        }
    };
} );
