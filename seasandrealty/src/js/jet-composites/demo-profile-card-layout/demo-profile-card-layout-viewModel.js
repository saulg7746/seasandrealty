  /**
    Copyright (c) 2015, 2019, Oracle and/or its affiliates.
    The Universal Permissive License (UPL), Version 1.0
  */
    "use strict";
    define([
      "knockout",
      "jquery",
      "ojL10n!./resources/nls/demo-profile-card-layout-strings",
      "ojs/ojknockout",
      "ojs/ojavatar",
    ], function (ko, $, componentStrings) {
      function SampleCardModel(context) {
        var self = this;
        this.initials = null;
    
        //At the start of your viewModel constructor
        var busyContext = oj.Context.getContext(context.element).getBusyContext();
        var options = {
          description: "demo-profile-card-layout startup - Waiting for data",
        };
        self.busyResolve = busyContext.addBusyState(options);
    
        var element = context.element;
    
        context.properties['reorderClass'] = context.properties.layout === 'reorder' ? 'demo-profile-card-layout-reorder' : '';
    
        self.properties = context.properties;
        self.res = componentStrings["demo-profile-card-layout"];
        self.viewMoreEmployees = self.res["viewMoreEmployees"];
    
        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
      }
    
      //    var lifecycle_methods = ["initialize", "activated", "connected", "bindingsApplied", "disconnected"];
      SampleCardModel.prototype.connected = function (context) {
        var self = this;
        var elt = context.element.firstElementChild;
        if (context.element.classList) {
          var classArray = context.element.classList;
          for (var i = 0, len = classArray.length; i < len; i++) {
            context.element.classList.add(classArray[i]);
          }
        }
        if (context.element.cssText) {
          elt.cssText += context.element.cssText;
        }
      };
    
      return SampleCardModel;
    });