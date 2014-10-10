/**
* Angular app.js
* Write the controllers and the filters.
* Module name is [App].
*   
* @author 2014 Mineo Okuda.
**/
App = angular.module('App',['onsen','ngAnimate']);


var Loading = {
	run : function (i){
		$('#loading .loading-bar span').width(0)
		$('#loading').removeClass('active');
	},
	complete : function (){
		$('#loading .loading-bar span').animate('width','100%')
		$('#loading').addClass('active');
	}
}
/**
 * [description]
 * @param  {[type]} $scope
 * @param  {[type]} $filter
 * @return {[type]}
 */
	App.controller('HomeController',['$scope','$filter',function($scope,$filter){
		/**
		 * [description]
		 * @return {[type]}
		 */
		
  		ons.ready(function(){
		$(window).on('load',function(){
  			loadResouces();
  		})
  		});
  		
  		function loadResouces(){
  			var img = document.createElement('img');
			img.src = 'img/top.jpg';
			img.onload = function(){
				setTimeout(
				    function(){
				      	$('#page').addClass('active');
				      }
				 ,400);
				setTimeout(
				    function(){
				      	$('.home-bg').removeClass('active');
				      	Loading.complete();
				      }
				 ,800);
			}
  		}

  		tabbar.on('prechange', function(event) {
			  if($('#homeBtn').hasClass('active')&&event.index==0){
			  		event.cancel();
			  }
			});
	}]);
	
