  /**
   * PlanController
   * @param  $scope
   * @param  $filter
   * @return void(0)
   */
  App.controller('PlanController',['$scope','$filter',function($scope,$filter){
  		$scope.plans = PlanConfig;
		$scope.floors = [];

  		ons.ready(function(){
  			for(var i=0;i<$scope.plans.floor;i++) $scope.floors[i] = i+1;
			$scope.floors.reverse();
  			$('.bg-plan').addClass('active');
  		})
  		/**
	  	 * [sideClose]
	  	 * @param  {[type]} index
	  	 * @return {[type]}
	  	 */
	  	$scope.sideClose = function(){
        	$('.side,.btn-close').toggleClass('close');
	    };
  }]);