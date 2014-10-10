  App.controller('ViewController',['$scope','$filter',function($scope,$filter){

		var camera, scene, renderer;
		var geometry, material, mesh;
		var target = new THREE.Vector3();
		var MIN_SCALE = 30;
		var MAX_SCALE = 70;
		var objects = [];
		$scope.auto = true;
		var beam = $('.beam');

		var view_path = [
			{
				path:'a-15-night',
				title :'15F 夜景'
			},
			{
				path:'a-15',
				title :'15F'
			},
			{
				path:'a-13',
				title :'13F'
			},
			{
				path:'a-10',
				title :'10F'
			},
			{
				path:'a-8',
				title :'8F'
			},
			{
				path:'a-5',
				title :'5F'
			},			
			{
				path:'a-2',
				title :'2F'
			}
		];
		var fname = [
			'pz',
			'nx',
			'ny',
			'py',
			'nz',
			'px'
		]
		var lon = 90, lat = 0;
		var phi = 0, theta = 0;
		$scope.view = view_path[0];		
		$scope.view_paths = view_path;
		var touchX, touchY;
		var viewRenderer = document.getElementById('ViewRenderer');
		ons.ready(function() {
			Loading.run();
			setTimeout(function(){
				$scope.imgPreload();
				init();
				animate();
			},200)
  			
			tabbar.on('prechange', function(event) {
			  if($('#viewBtn').hasClass('active')&&event.index==2){
			  		event.cancel();
			  }
			});
		});
		$scope.switchView = function(i){
			$('.side').find('.side-list-item .svg-wrapper').removeClass('active');
			
			$('#ViewRenderer').stop().fadeOut('fast',function(){
				$('.side').find('.side-list-item').eq(i).find('.svg-wrapper').addClass('active')
				$scope.view  = view_path[i];
				clearScene();
	 		  	init();
				
				$('#ViewRenderer').fadeIn('fast');
			});				
	    };
		/**
	  	 * [sideClose]
	  	 * @param  {[type]} index
	  	 * @return {[type]}
	  	 */
	  	$scope.sideClose = function(){
        	$('.side,.btn-close').toggleClass('close');
	    };
	    $scope.switch_auto = function(){	    	
        	$('.btn-animate').toggleClass('active');
	    	$scope.auto = (!$scope.auto) ? true : false;
	    }
		/**
		 * [init description]
		 * @return {[type]}
		 */
		function init() {
			camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000 );
			scene = new THREE.Scene();
			$scope.views = [
				{
					url: 'img/view/'+ $scope.view.path +'/pz.jpg',//3
					position: [ -448, 0, 0 ],
					rotation: [ 0, Math.PI / 2, 0 ]
				},
				{
					url: 'img/view/'+ $scope.view.path +'/nx.jpg',//1
					position: [ 448, 0, 0 ],
					rotation: [ 0, -Math.PI / 2, 0 ]
				},
				{
					url: 'img/view/'+ $scope.view.path +'/ny.jpg', // 4
					position: [ 0,  448, 0 ],
					rotation: [ Math.PI / 2, 0, Math.PI ]
				},
				{
					url: 'img/view/'+ $scope.view.path +'/py.jpg', // 5
					position: [ 0, -448, 0 ],
					rotation: [ - Math.PI / 2, 0, Math.PI ]
				},
				{
					url: 'img/view/'+ $scope.view.path +'/nz.jpg', //2
					position: [ 0, 0,  448 ],
					rotation: [ 0, Math.PI, 0 ]
				},
				{
					url: 'img/view/'+ $scope.view.path +'/px.jpg',//0
					position: [ 0, 0, -448 ],
					rotation: [ 0, 0, 0 ]
				}
			];

			for ( var i = 0; i < $scope.views.length; i ++ ) {

				var side = $scope.views[ i ];

				var element = document.createElement( 'img' );
				element.width = 900; 
				element.src = side.url;

				objects[i] = new THREE.CSS3DObject( element );
				objects[i].position.fromArray( side.position );
				objects[i].rotation.fromArray( side.rotation );
				scene.add( objects[i] );	
			}
			

			renderer = new THREE.CSS3DRenderer();
			renderer.setSize( window.innerWidth,  (window.innerHeight-47) );
			$('#ViewRenderer').html( renderer.domElement );
			viewRenderer.addEventListener( 'mousedown', onDocumentMouseDown, false );
			viewRenderer.addEventListener( 'touchstart', onDocumentTouchStart, false );
			viewRenderer.addEventListener( 'touchmove', onDocumentTouchMove, false );
			viewRenderer.addEventListener( 'gesturechange', onDocumentGesture,false);
			viewRenderer.addEventListener( 'mousewheel', onDocumentMouseWheel, false );
			window.addEventListener( 'resize', onWindowResize, false );

		}
		/**
		 * [onWindowResize description]
		 * @return {[type]}
		 */
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, (window.innerHeight-47) );
		}
		/**
		 * [onDocumentMouseDown description]
		 * @param  {[type]} event
		 * @return {[type]}
		 */
		function onDocumentMouseDown( event ) {
			event.preventDefault();
			viewRenderer.addEventListener( 'mousemove', onDocumentMouseMove, false );
			viewRenderer.addEventListener( 'mouseup', onDocumentMouseUp, false );
		}
		/**
		 * [onDocumentMouseMove description]
		 * @param  {[type]} event
		 * @return {[type]}
		 */
		function onDocumentMouseMove( event ) {
			var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
			lon -= movementX * 0.5;
		}
		/**
		 * [onDocumentMouseUp description]
		 * @param  {[type]} event
		 * @return {[type]}
		 */
		function onDocumentMouseUp( event ) {
			viewRenderer.removeEventListener( 'mousemove', onDocumentMouseMove );
			viewRenderer.removeEventListener( 'mouseup', onDocumentMouseUp );
		}
		/**
		 * [onDocumentTouchStart description]
		 * @param  {[type]} event
		 * @return {[type]}
		 */
		function onDocumentTouchStart( event ) {
			event.preventDefault();
			var touch = event.touches[ 0 ];
			touchX = touch.screenX;
		}
		/**
		 * [onDocumentTouchMove description]
		 * @param  {[type]} event
		 * @return {[type]}
		 */
		function onDocumentTouchMove( event ) {
			event.preventDefault();
			var touch = event.touches[ 0 ];
			lon -= ( touch.screenX - touchX ) * 0.5;
			touchX = touch.screenX;
		}
		/**
		 * [onDocumentTouchMove description]
		 * @param  {[type]} event
		 * @return {[type]}
		 */
		function onDocumentMouseWheel( event ) {
			event.preventDefault();
			var scale = camera.fov - event.wheelDeltaY * 0.05;
			scale = (scale < MIN_SCALE) ? MIN_SCALE : (MAX_SCALE < scale) ? MAX_SCALE : scale;
				camera.fov = scale;
				camera.updateProjectionMatrix();
		}
		/**
		 * [onDocumentGesture description]
		 * @param  {[type]} event
		 * @return {[type]}
		 */
		function onDocumentGesture( event ) {
			var scale = camera.fov - (event.scale -1 );
			scale = (scale < MIN_SCALE) ? MIN_SCALE : (MAX_SCALE < scale) ? MAX_SCALE : scale;
			camera.fov = scale;
			camera.updateProjectionMatrix();
		}
		function update (){
			if($scope.auto){
				lon +=  0.1;
			}
			lat = Math.max( - 85, Math.min( 85, lat ) );
			phi = THREE.Math.degToRad( 90 - lat );
			theta = THREE.Math.degToRad( lon );

			target.x = Math.sin( phi ) * Math.cos( theta );
			target.y = Math.cos( phi );
			target.z = Math.sin( phi ) * Math.sin( theta );
			var deg = parseFloat(beam.data('deg') + (lon - 90));
			beam.css('transform','rotate('+ deg +'deg)');
		}
		/**
		 * [animate description]
		 * @return {[type]}
		 */
		function animate() {
			update ();
			requestAnimationFrame( animate );
		
            camera.lookAt(target);
			render();
		}
		function render (){
			renderer.render( scene, camera );
		}
		function clearScene() {
			cancelAnimationFrame( animate )
			lon = 90;
			theta = 0;
			for ( var i = 0; i < $scope.views.length; i ++ ) {
				scene.remove(objects[i]);
			}
		}
		/**
		 * [preImage description]
		 * @return {[type]}
		 */
		$scope.imgPreload = function(){
			var cnt = 1;
			for (var i in view_path){
	    		for( var n =0; n <fname.length; n++){
	    			var img = document.createElement('img');
					img.src = 'img/view/'+ view_path[i].path +'/' + fname[n] + '.jpg';
					if(cnt == Object.keys(view_path).length * fname.length){
						img.onload = function(){
							Loading.complete()
						}
					}
					cnt ++;
				}
	    	}
		}
	
  }]);
