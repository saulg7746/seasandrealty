define(['knockout', 'ojs/ojcontext', 'ojs/ojknockout', 'ojs/ojfilmstrip', 'ojs/ojpagingcontrol'],
    function(ko, Context)
    {     
        var ViewModel = function(moduleParams)
        {
          this.pagingModel = ko.observable(null);
          this.properties = [
              { name: 'docker_day' },
              { name: 'lobby2' }
          ];
    
          this.getItemInitialDisplay = function(index)
          {
            return index < 1 ? '' : 'none';
          };
          
          this.transitionCompleted = function()
          {
            var filmStrip = document.getElementById('filmStrip');
            var busyContext = Context.getContext(filmStrip).getBusyContext();
            busyContext.whenReady().then(function ()
            {
              // Set the Paging Control pagingModel
              this.pagingModel(filmStrip.getPagingModel());
            }.bind(this));
          }.bind(this);
        }
    
        return ViewModel;
    });