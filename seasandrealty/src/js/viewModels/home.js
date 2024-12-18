/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['../accUtils','require', 'exports' , 'knockout', 'ojs/ojcontext', 'ojs/ojmodule-element-utils', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'ojs/ojcorerouter', 'ojs/ojmodulerouter-adapter', 'ojs/ojknockoutrouteradapter', 'ojs/ojurlparamadapter', 'ojs/ojarraydataprovider', 'ojs/ojknockouttemplateutils', 'ojs/ojbootstrap' , 'ojs/ojmodule-element', 'ojs/ojknockout', 'ojs/ojmodule', "ojs/ojbutton", "ojs/ojlistview",  "ojs/ojswitch", "ojs/ojavatar", "ojs/ojlistitemlayout", "ojs/ojactioncard", "jet-composites/demo-profile-card-layout/loader",],
 function(accUtils, require, exports, ko, Context, ModuleElementUtils , ResponsiveUtils, ResponsiveKnockoutUtils, CoreRouter, ModuleRouterAdapter, KnockoutRouterAdapter, UrlParamAdapter, ArrayDataProvider, KnockoutTemplateUtils, Bootstrap) {
    function HomeViewModel() {

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.KnockoutTemplateUtils = KnockoutTemplateUtils;
      this.ModuleElementUtils = ModuleElementUtils;
      
      this.checkValue = ko.observableArray();
              this.dircolumn = ko.pureComputed(() => {
                  return !!(typeof this.checkValue()[0] !== 'undefined' &&
                      this.checkValue()[0] != null &&
                      this.checkValue()[0] === 'dirColumn');
              });
              
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.');
        document.title = "Dashboard";
        // Implement further logic if needed
      };
      
        this.rawData = [
          {
              id: 1,
              name: 'Pool Homes',
              title: 'Own properties with luxury pools',
              phone: 14184556091,
              initials: 'CB',
              image: '../css/images/pool1.jpg'
          },
          {
              id: 2,
              name: 'Jungle Ambiance',
              title: 'Enjoy an amazing jungle ambiance',
              phone: 16195668098,
              initials: 'CC',
              image: '../css/images/pool2.jpg'
          },
          {
              id: 3,
              name: 'Cottage Core',
              title: 'Enjoy a cottage core asthetic',
              phone: 16194559090,
              initials: 'CJ',
              image: '../css/images/pool3.jpg'
          },
        ]
        this.layoutViewRadios = [
            { id: 'card', icon: 'oj-ux-ico-grid-view-small' },
            { id: 'list', icon: 'oj-ux-ico-list-round' }
        ];
        this.activeLayout = ko.observable('card');
        this.prevActiveLayout = ko.observable('card');
        this.dataProvider = new ArrayDataProvider(this.rawData, {
            keyAttributes: 'id'
        });
        this.smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
        // this.isSmall = () => {
        //     const smallScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(this.smQuery);
        //     if (smallScreen()) {
        //         this.prevActiveLayout(this.activeLayout());
        //         this.activeLayout('list');
        //     }
        //     else {
        //         this.activeLayout(this.prevActiveLayout());
        //     }
        //     return smallScreen();
        // };
      
      
    
      Bootstrap.whenDocumentReady().then(function () {
        ko.applyBindings(new ViewModel(),
            document.getElementById('filmstrip-stretchitems-example'));
      });

      Bootstrap.whenDocumentReady().then(function () {
        ko.applyBindings(new ViewModel(),
            document.getElementById('listviewContainer'));
      });

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return HomeViewModel;
  }
);
