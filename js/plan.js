  /**
   * PlanController
   * @param  $scope
   * @param  $filter
   * @return void(0)
   */
  App.controller('PlanController',['$scope','$filter',function($scope,$filter){
  		
  		$scope.plans = PlanConfig;
		$scope.floors = [];
		$scope.step  = 0;
		var areas = [];

		for(var i=$scope.plans.area.min; i<=PlanConfig.area.max; i+=PlanConfig.area.step) {
			areas.push(i);
		}
		var steps =areas.reduce(function(o, v, i) {
			  o[v] = v;
			  return o;
		}, {});
		console.log(steps);
		$scope.area = areas;
  		ons.ready(function(){
  			for(var i=0;i<$scope.plans.floor;i++) $scope.floors[i] = i+1;
			$scope.floors.reverse();
  			setTimeout(
  			         function(){
  			         	$('.bg-plan').addClass('active');
  			         	$('.plans li').tile(2);
  			         	$('.nstSlider').nstSlider({
  			         		"rounding": steps,
						    "left_grip_selector": ".leftGrip",
						    "right_grip_selector": ".rightGrip",
						    "value_bar_selector": ".bar",
						    "value_changed_callback": function(cause, leftValue, rightValue) {
						        $(this).parent().find('.leftLabel').text(leftValue);
						        $(this).parent().find('.rightLabel').text(rightValue);
						    }
						});
  			},200);
  			
  		})
  		
  }]);

