
/**
* PlanController
* @param  $scope
* @param  $filter
* @return void(0)
*/
App.controller('PlanController',['$scope','$filter','$timeout',function($scope,$filter,$timeout){
  		
  		$scope.plans = PlanConfig;
		$scope.floors = [];
		$scope.step  = 0;
		var areas = [];
		var canvas = document.getElementById('canvas');
		// var ctx = canvas.getContext('2d');
		$scope.filters = {
			area : {
				min : 55,
				max: 90
			},
			type :{
			},
			direction : {
			}
		};
		var msnry = $('.plans ul');

		for(var i=$scope.plans.area.min; i<=PlanConfig.area.max; i+=PlanConfig.area.step) {
			areas.push(i);
		}
		var steps =areas.reduce(function(o, v, i) {
			  o[v] = v;
			  return o;
		}, {});
		$scope.area = areas;

		$scope.modal = $scope.plans.data[0];
		// $scope. = false;

		/**
		 * [description]
		 * @return {[type]}
		 */
  		ons.ready(function(){
  			for(var i=0;i<$scope.plans.floor;i++) $scope.floors[i] = i+1;
			$scope.floors.reverse();
  			setTimeout(
  			         function(){
  			         	$('.bg-plan').addClass('active');
  			         	msnry.masonry({itemSelector: 'li',transitionDuration:0});
  			         	$('.nstSlider').nstSlider({
  			         		// "rounding": steps,
						    "left_grip_selector": ".leftGrip",
						    "right_grip_selector": ".rightGrip",
						    "value_bar_selector": ".bar",
						    "value_changed_callback": function(cause, leftValue, rightValue) {
						        $(this).parent().find('.leftLabel').text(leftValue);
						        $(this).parent().find('.rightLabel').text(rightValue);
						        $scope.$apply(function () {
						        	$scope.filters.area.min = leftValue;
						       		$scope.filters.area.max = rightValue;
						       		$scope.changed();
						       	});						       
						    }
						});
					$(window).on('resize',function(){
						msnry.masonry('reload');  
						resize();
						drawImg($scope.modal.src);	
					});
					tabbar.on('prechange', function(event) {
					  if($('#planBtn').hasClass('active')&&event.index==3){
					  		event.cancel();
					  }
					});
				resize();
  			},200);
  		});	
  		/**
  		 * [check_type description]
  		 * @param  {[type]} i
  		 * @param  {[type]} key
  		 * @return {[type]}
  		 */
  		$scope.check_type = function(i,key){
  			var that = angular.element(event.target);
  			that.toggleClass('active')
  			$scope.filters.type[key] = (!$scope.filters.type[key]||$scope.filters.type[key]==='undefined') ? true : false;
  			$scope.changed();
  		}
  		/**
  		 * [check_direction description]
  		 * @param  {[type]} i
  		 * @param  {[type]} key
  		 * @return {[type]}
  		 */
  		$scope.check_direction = function(i,key){
  			var that = angular.element(event.target);
  			that.toggleClass('active')
  			$scope.filters.direction[key] = (!$scope.filters.direction[key]||$scope.filters.direction[key]==='undefined') ? true : false;
  			$scope.changed();
  		}
  		/**
  		 * [filterByArea description]
  		 * @param  {[type]} data
  		 * @return {[type]}
  		 */
  		$scope.filterByArea = function (data) {
	        return ($scope.filters.area.max > data.score && data.score  > $scope.filters.area.min ) ? true : false;
	    };
	    /**
	     * [filterByType description]
	     * @param  {[type]} data
	     * @return {[type]}
	     */
  		$scope.filterByType = function (data) {
	        return $scope.filters.type[data.type] || noFilter($scope.filters.type);
	    };
	    /**
	     * [filterByDirection description]
	     * @param  {[type]} data
	     * @return {[type]}
	     */
	    $scope.filterByDirection = function (data) {
	        return $scope.filters.direction[data.direction] || noFilter($scope.filters.direction);
	    }; 

	    $scope.changed = function(){
		    $timeout(
		     function(){
		     	msnry.masonry('reload');  
			   	 $(".plans li").last().stop(true,true).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){	
				   		msnry.masonry('reload');       		    
		       		 });
			   	  }
		   	 ,500);
		};
		$scope.trigger_modal = function(type){
			var i = 0;
			for ( var key in $scope.plans.data ) {
				if(type == $scope.plans.data[key].plan)				
					i = key;
			}

			$('#modal').addClass('active')
			$scope.modal = $scope.plans.data[i];
			$scope.modalopen = true;
			setTimeout(function(){
				resize();	
				drawImg($scope.modal.src);
			},300)
		}
		$scope.close_modal  = function(){
			$('#modal').removeClass('active')
			$scope.modalopen = false;
			$('#canvas').removeClass('active')
		}
		function drawImg(src){
			 new ImgTouchCanvas({
		            canvas: canvas,
		            path:src
		     });
		     $('#canvas').addClass('active')
		}
		function resize(){
			var wrap = $('.canvaswrap');
			canvas.width = wrap.width();
			canvas.height = wrap.height();
		}
	    /**
	     * [noFilter description]
	     * @param  {[type]} filterObj
	     * @return {[type]}
	     */
	    function noFilter(filterObj) {
	        for (var key in filterObj) {
	            if (filterObj[key]) {
	                return false;
	            }
	        }
       		return true;
   		}      		
   		var resizeMAR = function(originWidth, originHeight, resizeNumber, resizeMove, otherSideNumber) {
			var result = false;
			if (originWidth && originHeight && resizeNumber && resizeMove) {
				if (String(originWidth).match(/^[0-9]+$/) && String(originHeight).match(/^[0-9]+$/) &&
					String(resizeNumber).match(/^[0-9]+$/) && resizeMove.match(/^(width|height)$/)) {

					var newWidth     = 0;
					var newHeight    = 0;
					var reResizeMove = '';

					if (resizeMove === 'width') {
						newHeight    = resizeNumber * originHeight / originWidth;
						newWidth     = newHeight * originWidth / originHeight;
						reResizeMove = 'height';
					} else {
						newWidth     = resizeNumber * originWidth / originHeight;
						newHeight    = newWidth * originHeight / originWidth;
						reResizeMove = 'width';
					}

					if (otherSideNumber && String(otherSideNumber).match(/^([0-9]+|auto)$/)  && newHeight > otherSideNumber) {
						reResult = resizeMAR(newWidth, newHeight, otherSideNumber, reResizeMove);
						if (reResult) {
							result = reResult;
						}
					} else {
						result = {
							width  : newWidth,
							height : newHeight
						};
					}
				}
			}
			return result;
		};

  }]);

