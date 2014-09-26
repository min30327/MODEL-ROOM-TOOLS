/**
* Angular app.js
* Write the controllers and the filters.
* Module name is [App].
*   
* @author 2014 Mineo Okuda.
**/
  App = angular.module('App',['onsen','ngAnimate']);

  /**
   * ColorSelectController
   * @param  $scope
   * @param  $filter
   * @return void(0)
   */
  App.controller('ColorSelectController',['$scope','$filter',function($scope,$filter){
  		$scope.active = 0;
  		$scope.types = regions[$scope.active];
  		$scope.textures = textures;
  		$scope.tops = tops;
	  	ons.ready(function() {
		  	$scope.image = $scope.types[0];
		  	$scope.primary_texture = $scope.textures[0];
		  	$scope.primary_top = $scope.tops[0];
  		});
	  	/**
	  	 * [swichColor description]
	  	 * @return {[type]}
	  	 */
	  	$scope.swichColor = function(next){
	  		$('.side').find('.list__item .svg-wrapper').removeClass('active')
	  		$('.color-select-view.prev').css("background-image",'url(' + $scope.types[next].source+')');
	  		$('.color-select-view.fade').stop(true,true).fadeOut(400,'swing',function(){
	  			$('.side').find('.list__item').eq(next).find('.svg-wrapper').addClass('active')
	  			$(this).css("background-image",'url(' + $scope.types[next].source+')').show();
	  		});
	  		$scope.texture = ($scope.types[next].texture) ? true : false;
	  		$scope.top = ($scope.types[next].top) ? true : false;
	  	}

	  	/**
	  	 * [toggle description]
	  	 * @return {[type]}
	  	 */
	  	$scope.toggle = function(type){
	  		if(type!=$scope.active){
	  			$('.toggle-switch span').toggleClass('active');
	  			$scope.active = type;
	  			$scope.types = regions[$scope.active];
	  			$('.color-select-view.prev').css("background-image",'url(' + $scope.types[0].source+')');
	  			$('.side').find('.list__item .svg-wrapper').removeClass('active')
	  			$('.color-select-view.fade').stop(true,true).fadeOut(400,'swing',function(){
	  				$('.side').find('.list__item .svg-wrapper:first').addClass('active')
		  			$(this).css("background-image",'url(' + $scope.types[0].source+')').fadeIn(400,'swing');
	  			});
	  		}
	  	}

	  	/**
	  	 * [switch_texture description]
	  	 * @param  {[type]} type
	  	 * @return {[type]}
	  	 */
	  	$scope.switch_texture = function(i){
	  		$scope.primary_texture = $scope.textures[i];
	  	}
	  	/**
	  	 * [switch_top description]
	  	 * @param  {[type]} type
	  	 * @return {[type]}
	  	 */
	  	$scope.switch_top = function(i){
	  		$scope.primary_top = $scope.tops[i];
	  	}
	  	/**
	  	 * [rowClass description]
	  	 * @param  {[type]} index
	  	 * @return {[type]}
	  	 */
	  	$scope.rowClass = function(index){
         if(index == 0){
             return 'active';
	         }
	        return '';
	    };     
		/**
	  	 * [sideClose]
	  	 * @param  {[type]} index
	  	 * @return {[type]}
	  	 */
	  	$scope.sideClose = function(){
        	$('.side').toggleClass('close');
	    }; 

	  
  }]);


var regions =[
	  [
	  				{
	  					title 	: 'Comfort Natural',
	  					source  : 'img/living-natural.jpg',
	  					texture : false,
	  					top		: false,

	  				},
	  				{
	  					title 	: 'Medium Mocha',
	  					source  : 'img/living-mocha.jpg',
	  					texture : false,
	  					top 	: false,

	  				},
	  				{
	  					title 	: 'Graceful Brown',
	  					source  : 'img/living-brown.jpg',
	  					texture : false,
	  					top 	: false,

	  				}
	  	],
	 	[
	 				{
	  					title 	: 'Model Room',
	  					source  : 'img/kitchen-modelroom.jpg',
	  					texture : false,
	  					top 	: false,

	  				},
	  				{
	  					title 	: 'Comfort Natural',
	  					source  : 'img/kit_nat_t01_s01.jpg',
	  					texture : true,
	  					top 	: true,

	  				},
	  				{
	  					title 	: 'Medium Mocha',
	  					source  : 'img/kit_med_t01_s01.jpg',
	  					texture : true,
	  					top 	: true,

	  				},
	  				{
	  					title 	: 'Graceful Brown',
	  					source  : 'img/kit_bro_t01_s01.jpg',
	  					texture : true,
	  					top 	: true,

	  				}
	  	]
	 ];	  

	var textures = [
		{
			title : 'ホワイトウッド',
			source : 'img/texture/door-01.jpg'
		},
		{
			title : 'グレーウッド',
			source : 'img/texture/door-02.jpg'
		},
		{
			title : 'ミディアムウッド',
			source : 'img/texture/door-03.jpg'
		},
		{
			title : 'ダークウッド',
			source : 'img/texture/door-04.jpg'
		},
		{
			title : 'ホワイト',
			source : 'img/texture/door-05.jpg'
		},
		{
			title : 'シルバー',
			source : 'img/texture/door-06.jpg'
		},
		{
			title : 'グレージュ',
			source : 'img/texture/door-07.jpg'
		},
		{
			title : 'ブラウン',
			source : 'img/texture/door-08.jpg'
		}
	]


	var tops = [
		{
			title : 'フロスティホワイト',
			source : 'img/texture/top-01.jpg'
		},
		{
			title : 'ビーン',
			source : 'img/texture/top-02.jpg'
		},
		{
			title : 'クラムグレー',
			source : 'img/texture/top-03.jpg'
		}
	]