
  /**
   * ColorSelectController
   * @param  $scope
   * @param  $filter
   * @return void(0)
   */
  App.controller('ColorSelectController',['$scope','$filter',function($scope,$filter){
  		$scope.active = 0;
  		$scope.types = ColorSelectConfig.regions[$scope.active];
  		$scope.textures = ColorSelectConfig.textures;
  		$scope.tops = ColorSelectConfig.tops;
  		$scope.primary_cupboard = false;
  		$scope.texture_num = 0;
  		$scope.state = '_nat';
  		$scope.top_num = 1;
  		$scope.shape_num = 1;
  		
	  	ons.ready(function() {
		  	$scope.image = $scope.types[0];
		  	$scope.primary_texture = $scope.textures[3];
		  	$scope.primary_top = $scope.tops[0];
		  	$scope.imgPreload;
		  	
  		});

	  	/**
	  	 * [swichColor description]
	  	 * @return {[type]}
	  	 */
	  	$scope.swichColor = function(next){
	  		$('.side').find('.side-list-item .svg-wrapper').removeClass('active')
	  		var cupboard = ($scope.primary_cupboard) ? 'on':'off';
	  		$scope.shape_num = 2;
        	$('.btn-shape').removeClass('active')
	  		$('.color-select-view.prev').css("background-image",'url(' +  $scope.types[next].source +')');
	  		$scope.state = $scope.types[next].state;
	  		$('.color-select-view.fade').stop(true,true).fadeOut(400,'swing',function(){
	  			$('.side').find('.side-list-item').eq(next).find('.svg-wrapper').addClass('active')
	  			$(this).css("background-image",'url(' +  $scope.types[next].source +')').show();
	  		});
	  		$scope.texture = ($scope.types[next].texture) ? true : false;
	  		$scope.top = ($scope.types[next].top) ? true : false;
	  		set_menu(next)
	  	}

	  	/**
	  	 * [toggle description]
	  	 * @return {[type]}
	  	 */
	  	$scope.toggle = function(type){
	  		if(type!=$scope.active){
	  			$('.toggle-switch span').toggleClass('active');
	  			$scope.active = type;
	  			$scope.types = ColorSelectConfig.regions[$scope.active];
	  			$('.color-select-view.prev').css("background-image",'url(' + $scope.types[0].source+')');
	  			$('.side').find('.side-list-item .svg-wrapper').removeClass('active')
	  			$('.color-select-view.fade').stop(true,true).fadeOut(400,'swing',function(){
	  				$('.side').find('.side-list-item .svg-wrapper:first').addClass('active')
		  			$(this).css("background-image",'url(' + $scope.types[0].source+')').fadeIn(400,'swing');
	  			});
	  			set_menu(0);
	  		}
	  	}

	  	/**
	  	 * [switch_texture description]
	  	 * @param  {[type]} type
	  	 * @return {[type]}
	  	 */
	  	$scope.switch_texture = function(i){
	  		var ovrlay = $('.color-select-view.overlay');
	  		var prev = $('.color-select-view.overlay-prev');	  		
	  		var cupboard = ($scope.primary_cupboard) ? 'on':'off';
	  		prev.css("background-image",'url(' + get_tex_url('img/png/kit','m0'+ (i+1),cupboard,'.png') +')');
	  		$scope.primary_texture = $scope.textures[i];
	  		$scope.texture_num = i;
	  		ovrlay.stop(true,true).fadeOut(300,'swing',function(){
	  			$(this).css("background-image",'url(' + get_tex_url('img/png/kit','m0'+ (i+1),cupboard,'.png') +')').fadeIn(400,'swing');
	  		});
	  	}
	  	/**
	  	 * [switch_top description]
	  	 * @param  {[type]} type
	  	 * @return {[type]}
	  	 */
	  	$scope.switch_top = function(i){
	  		$scope.primary_top = $scope.tops[i];
	  		$scope.top_num = i+1;
	  		$('.color-select-view.prev').css("background-image",'url(' + get_url('img/kit'+$scope.state,'_t0'+ (i+1),'_s0'+ $scope.shape_num,'.jpg') +')');
	  		$('.color-select-view.fade').stop(true,true).fadeOut(400,'swing',function(){
	  			$(this).css("background-image",'url(' + get_url('img/kit'+$scope.state,'_t0'+ (i+1),'_s0'+ $scope.shape_num,'.jpg') +')').show();
	  		});
	  	}
	  	/**
	  	 * [switch_shape description]
	  	 * @param  {[type]} type
	  	 * @return {[type]}
	  	 */
	  	$scope.switch_shape = function(){	  		
	  		$('.btn-shape').toggleClass('active')
        	if($('.btn-shape').hasClass('active')){
        		$scope.shape_num = 2;
        	}else{
        		$scope.shape_num = 1;
        	}
	  		$('.color-select-view.prev').css("background-image",'url(' + get_url('img/kit'+$scope.state,'_t0'+ $scope.top_num, '_s0'+$scope.shape_num ,'.jpg') +')');
	  		$('.color-select-view.fade').stop(true,true).fadeOut(400,'swing',function(){
	  			$(this).css("background-image",'url(' + get_url('img/kit'+$scope.state,'_t0'+ $scope.top_num, '_s0'+ $scope.shape_num,'.jpg') +')').show();
	  		});
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
        	$('.side,.btn-close').toggleClass('close');
	    };
	    /**
	  	 * [sideClose]
	  	 * @param  {[type]} index
	  	 * @return {[type]}
	  	 */
	  	$scope.switch_cupboard = function(){
	  		$('.btn-cupboard').toggleClass('active')
        	if($('.btn-cupboard').hasClass('active')){
        		$scope.primary_cupboard = true;
        		$scope.shape_num = 2;
        		$('.btn-shape').addClass('active')
        		$scope.switch_shape();
        	}else{
        		$scope.primary_cupboard = false;
        	}
        	$scope.switch_texture($scope.texture_num);
	    };
	    /**
	  	 * [get_tex_url]
	  	 * @param  {[type]} index
	  	 * @return {[type]}
	  	 */
	  	get_tex_url = function(path,i,cupboard,file){
        	return path + '_' + cupboard + '_' + i + file
	    };
	    /**
	  	 * [get_url]
	  	 * @param  {[type]} index
	  	 * @return {[type]}
	  	 */
	  	get_url = function(path,t,s,file){
        	return path + t + s + file
	    };
	    /**
	     * [set_menu description]
	     * @param {[type]} i
	     */
	    set_menu = function (i){
	    		$scope.texture = ($scope.types[i].texture) ? true : false;
	  			$scope.top = ($scope.types[i].top) ? true : false;
	  			$scope.cupboard = ($scope.types[i].cupboard) ? true : false;
	  			$scope.shape = ($scope.types[i].shape) ? true : false;
	    }
	    /**
	     * [imgPreload description]
	     * @return {[type]}
	     */
	    $scope.imgPreload = function(){
	    	for (var i in ColorSelectConfig.textures){
	    		var img = document.createElement('img');
				img.src = ColorSelectConfig.textures[i].source;
	    	}
	    	for (var i in ColorSelectConfig.tops){
	    		var img = document.createElement('img');
				img.src = ColorSelectConfig.tops[i].source;
	    	}
	    	for(var n in  regions){
	    		for(var i in  ColorSelectConfig.regions[n]){
					var img = document.createElement('img');
					img.src = ColorSelectConfig.regions[n][i].source;
	    		}
	    	}
	    }
		 

  }]);