define([
    'qlik',
    'jquery',
    './properties',
    './initialproperties',
    'text!./ShapesAndText.html',
    'text!./ShapesAndText.css'
  ],
  function(qlik, $, props, initProps, ShapesAndText, css) {
    'use strict';

    $("<style>").html(css).appendTo("head");

    return {
      definition: props,
      initialProperties: initProps,
      snapshot: {
        canTakeSnapshot: true
      },
      template: ShapesAndText,
      paint: function($element, layout) {
             
        this.$scope.layout = layout;
        this.$scope.myTable = layout.myTable;


        if (!this.$scope.table) {
          this.$scope.table = qlik.table(this);
          this.$scope.qMatrix = layout.qHyperCube.qDataPages[0].qMatrix;
        }

      }
    };
  });

