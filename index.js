import * as THREE from './resources/build/three.module.js';
import {OrbitControls} from './resources/examples/jsm/controls/OrbitControls.js';
import {GUI} from 'https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js';

/*ANDREA MUNARIN MATRICOLA=879607*/
	
window.onload=function(){
	
	

	var scene = new THREE.Scene();
	
	var camera = new THREE.PerspectiveCamera( 95, window.innerWidth/window.innerHeight, 0.1, 1000);
	
	camera.position.z = 45;
	camera.position.y = 15;
	
	
	const canvas = document.querySelector('#c');
	var renderer = new THREE.WebGLRenderer({canvas});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild( renderer.domElement);
	
	/*permettiamo il controllo della camera*/
	const controls = new OrbitControls(camera, canvas);

	var geometry_sun = new THREE.SphereGeometry(2,500,500);
	var material_sun = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/sun.jpg')});
	var sun = new THREE.Mesh(geometry_sun, material_sun);
	sun.position.set(0,0,0);
	sun.matrixAutoUpdate = false;
	
	var geometry_mer = new THREE.SphereGeometry(0.4,100,100);
	var material_mer = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/mer.jpg')});
	var mer = new THREE.Mesh(geometry_mer, material_mer);
	mer.matrixAutoUpdate = false;
	
	var geometry_ven = new THREE.SphereGeometry(0.52,100,100);
	var material_ven = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/ven.jpg')});
	var ven = new THREE.Mesh(geometry_ven, material_ven);
	ven.matrixAutoUpdate = false;
	
	var geometry_earth = new THREE.SphereGeometry(0.75,100,100);
	var material_earth = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/earth.jpg')});
	var earth = new THREE.Mesh(geometry_earth, material_earth);
	earth.matrixAutoUpdate = false;
	
	var geometry_moon = new THREE.SphereGeometry(0.4,100,100);
	var material_moon = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/moon.jpg')});
	var moon = new THREE.Mesh(geometry_moon, material_moon);
	moon.matrixAutoUpdate = false;
	
	var geometry_mars = new THREE.SphereGeometry(0.65,100,100);
	var material_mars = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/mars.jpg')});
	var mars = new THREE.Mesh(geometry_mars, material_mars);
	mars.matrixAutoUpdate = false;
	
	var geometry_jup = new THREE.SphereGeometry(1.25,100,100);
	var material_jup = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/jupiter.jpg')});
	var jup = new THREE.Mesh(geometry_jup, material_jup);
	jup.matrixAutoUpdate = false;
	
	var geometry_ganymede = new THREE.SphereGeometry(0.5,100,100);
	var material_ganymede = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/ganymede.jpg')});
	var ganymede = new THREE.Mesh(geometry_ganymede, material_ganymede);
	ganymede.matrixAutoUpdate = false;
	
	var geometry_sat = new THREE.SphereGeometry(1.05,100,100);
	var material_sat = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/sat.jpg')});
	var sat = new THREE.Mesh(geometry_sat, material_sat);
	sat.matrixAutoUpdate = false;
	
	var geometry_ring = new THREE.RingGeometry(1, 1.5, 200, 200, 0, Math.PI*2);
	var material_ring = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/ring.png'), side: THREE.DoubleSide} );
	var ring = new THREE.Mesh(geometry_ring, material_ring);
	ring.matrixAutoUpdate = false;
	
	var geometry_ura = new THREE.SphereGeometry(0.8,100,100);
	var material_ura = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/ura.jpg')});
	var ura = new THREE.Mesh(geometry_ura, material_ura);
	ura.matrixAutoUpdate = false;
	
	var geometry_nept = new THREE.SphereGeometry(0.8,100,100);
	var material_nept = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('IMGs/nept.jpg')});
	var nept = new THREE.Mesh(geometry_nept, material_nept);
	nept.matrixAutoUpdate = false;
	
	/*per rendere la scena visibile da tutte le direzioni - poichè è possibile spostare la camera*/
	var directionalLight_front = new THREE.DirectionalLight( 0xffffff, 0.5)
	directionalLight_front.position.set(0, 0, 1).normalize();
	
	var directionalLight_back = new THREE.DirectionalLight( 0xffffff, 0.5)
	directionalLight_back.position.set(0, 0, -1).normalize();
	
	var directionalLight_left = new THREE.DirectionalLight( 0xffffff, 0.5)
	directionalLight_left.position.set(-1, 0, 0).normalize();
	
	var directionalLight_right = new THREE.DirectionalLight( 0xffffff, 0.5)
	directionalLight_right.position.set(1, 0, 0).normalize();
	
	var directionalLight_top = new THREE.DirectionalLight( 0xffffff, 0.5)
	directionalLight_top.position.set(0, 1, 0).normalize();
	
	var directionalLight_bottom = new THREE.DirectionalLight( 0xffffff, 0.5)
	directionalLight_bottom.position.set(0, -1, 0).normalize();
	
	/*per fare in modo che la faccia dei pianeti rivolta verso il sole sia più illuminata*/
	
	var pointLight = new THREE.PointLight( 0xffffff, 1.5)
	pointLight.position.set(0, 0, 0).normalize();
	
	const gui = new GUI();
	gui.add(pointLight, 'intensity', -3, 3);
	
	/*aggiungiamo tutti elementi alla scena*/
	scene.background = THREE.ImageUtils.loadTexture('IMGs/background.jpg');
	scene.add(directionalLight_top);
	scene.add(directionalLight_bottom);
	scene.add(directionalLight_back);
	scene.add(directionalLight_front);
	scene.add(directionalLight_left);
	scene.add(directionalLight_right);
	sun.add(pointLight)
	scene.add(sun);
	sun.add(mer);
	sun.add(ven);
	sun.add(earth);
	earth.add(moon);
	sun.add(mars);
	sun.add(jup);
	jup.add(ganymede);
	sun.add(sat);
	sat.add(ring);
	sun.add(ura);
	sun.add(nept);
	
	/*creaiamo le traiettorie dei pianeti*/
	var color_line = new THREE.LineBasicMaterial( { color: 0xffffff } );
	
	var geometry_mer = new THREE.CircleGeometry( 3.3, 100 );
	geometry_mer.vertices.shift();
	var line_mer = new THREE.LineLoop( geometry_mer, color_line );
	line_mer.rotation.x = 1.57;
	
	var geometry_ven = new THREE.CircleGeometry( 5.5, 100 );
	geometry_ven.vertices.shift();
	var line_ven = new THREE.LineLoop( geometry_ven, color_line );
	line_ven.rotation.x = 1.57;
	
	var geometry_earth = new THREE.CircleGeometry( 8.0, 100 );
	geometry_earth.vertices.shift();
	var line_earth = new THREE.LineLoop( geometry_earth, color_line );
	line_earth.rotation.x = 1.57;
	
	var geometry_mars = new THREE.CircleGeometry( 10.5, 100 );
	geometry_mars.vertices.shift();
	var line_mars = new THREE.LineLoop( geometry_mars, color_line );
	line_mars.rotation.x = 1.57;
	
	var geometry_jup = new THREE.CircleGeometry( 12.75, 100 );
	geometry_jup.vertices.shift();
	var line_jup = new THREE.LineLoop( geometry_jup, color_line );
	line_jup.rotation.x = 1.57;
	
	var geometry_sat = new THREE.CircleGeometry( 18.75, 100 );
	geometry_sat.vertices.shift();
	var line_sat = new THREE.LineLoop( geometry_sat, color_line );
	line_sat.rotation.x = 1.57;
	
	var geometry_ura = new THREE.CircleGeometry( 22.75, 100 );
	geometry_ura.vertices.shift();
	var line_ura = new THREE.LineLoop( geometry_ura, color_line );
	line_ura.rotation.x = 1.57;
	
    var geometry_nept = new THREE.CircleGeometry( 25.75, 100 );
	geometry_nept.vertices.shift();
	var line_nept = new THREE.LineLoop( geometry_nept,color_line);
	line_nept.rotation.x = Math.PI/2.0;
	
	/*aggiungiamo le traiettorie */
	sun.add( line_mer );
	sun.add( line_ven );
	sun.add( line_earth );
	sun.add( line_mars );
	sun.add( line_jup );
	sun.add( line_sat );
	sun.add( line_ura );
	sun.add( line_nept );
	
	
	var render = function(){
		
		var now = new Date();
		var dt = now-(render.time||now);
		render.time=now;
		
		/*impostiamo distanza dal sole e velocità di rotazione/rivoluzione*/
		var sun_rot = new THREE.Matrix4().makeRotationY( 0.0007*render.time );
		sun.matrix = sun_rot;
		
		var mer_tras=new THREE.Matrix4().makeTranslation(3.5,0,0);
		var mer_riv = new THREE.Matrix4().makeRotationY( 0.0003*render.time );
		var mer_rot = new THREE.Matrix4().makeRotationY( 0.002*render.time );
		mer.matrix = mer_riv.multiply(mer_tras.multiply(mer_rot));
		
		var ven_tras=new THREE.Matrix4().makeTranslation(5.5,0,0);
		var ven_riv = new THREE.Matrix4().makeRotationY( 0.0002*render.time );
		var ven_rot = new THREE.Matrix4().makeRotationY( 0.001*render.time );
		ven.matrix = ven_riv.multiply(ven_tras.multiply(ven_rot));
		
		var earth_tras=new THREE.Matrix4().makeTranslation(8,0,0);
		var earth_riv = new THREE.Matrix4().makeRotationY( 0.0001*render.time );
		var earth_rot = new THREE.Matrix4().makeRotationY( 0.004*render.time );
		earth.matrix = earth_riv.multiply(earth_tras.multiply(earth_rot));
		
		var moon_tras=new THREE.Matrix4().makeTranslation(1.4,0,0);
		var moon_riv = new THREE.Matrix4().makeRotationY( 0.0001*render.time );
		var moon_rot = new THREE.Matrix4().makeRotationY( 0.003*render.time );
		moon.matrix = moon_riv.multiply(moon_tras.multiply(moon_rot));
		
		var mars_tras=new THREE.Matrix4().makeTranslation(10.5,0,0);
		var mars_riv = new THREE.Matrix4().makeRotationY( 0.00016*render.time );
		var mars_rot = new THREE.Matrix4().makeRotationY( 0.003*render.time );
		mars.matrix = mars_riv.multiply(mars_tras.multiply(mars_rot));
		
		var jup_tras=new THREE.Matrix4().makeTranslation(12.75,0,0);
		var jup_riv = new THREE.Matrix4().makeRotationY( 0.00001*render.time );
		var jup_rot = new THREE.Matrix4().makeRotationY( 0.007*render.time );
		jup.matrix = jup_riv.multiply(jup_tras.multiply(jup_rot));
		
		var ganymede_tras=new THREE.Matrix4().makeTranslation(2.35,0,0);
		var ganymede_riv = new THREE.Matrix4().makeRotationY( 0.0001*render.time );
		var ganymede_rot = new THREE.Matrix4().makeRotationY( 0.003*render.time );
		ganymede.matrix = ganymede_riv.multiply(ganymede_tras.multiply(ganymede_rot));
		
		var sat_tras=new THREE.Matrix4().makeTranslation(18.75,0,0);
		var sat_riv = new THREE.Matrix4().makeRotationY( 0.000005*render.time );
		var sat_rot = new THREE.Matrix4().makeRotationY( 0.011*render.time );
		sat.matrix = sat_riv.multiply(sat_tras.multiply(sat_rot));
		
		var ring_rot1 =  new THREE.Matrix4().makeRotationX( Math.PI/3);
		var ring_rot = new THREE.Matrix4().makeRotationY( 0.000005*render.time );
		ring.matrix = ring_rot.multiply(ring_rot1);
		
		var ura_tras=new THREE.Matrix4().makeTranslation(22.75,0,0);
		var ura_riv = new THREE.Matrix4().makeRotationY( 0.00000005*render.time );
		var ura_rot = new THREE.Matrix4().makeRotationY( 0.009*render.time );
		ura.matrix = ura_riv.multiply(ura_tras.multiply(ura_rot));
		
		var nept_tras=new THREE.Matrix4().makeTranslation(25.75,0,0);
		var nept_riv = new THREE.Matrix4().makeRotationY( 0.00000002*render.time );
		var nept_rot = new THREE.Matrix4().makeRotationY( 0.008*render.time );
		nept.matrix = nept_riv.multiply(nept_tras.multiply(nept_rot));
		
		
		renderer.render(scene, camera);
		
		requestAnimationFrame( render );
		
	}
	
	render();
}