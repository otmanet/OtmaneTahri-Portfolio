import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 displayLanguges:boolean = false
 renderer = new THREE.WebGLRenderer();
 scene : any;
 camera : any;
 mesh : any;

 @ViewChild('rendererContainer') rendererContainer: ElementRef ;

 constructor() { 
  this.scene = new THREE.Scene();
  this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  this.camera.position.z = 1000;

  const geometry = new THREE.BoxGeometry(200, 200, 200);
  const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
  this.mesh = new THREE.Mesh(geometry, material);

  this.scene.add(this.mesh);

 } 
  ngOnInit() {
    this.displayLanguges = false
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
}
animate() {
  window.requestAnimationFrame(() => this.animate());
  this.mesh.rotation.x += 0.01;
  this.mesh.rotation.y += 0.01;
  this.renderer.render(this.scene, this.camera);
}
  onLangueges(){
    this.displayLanguges =   !this.displayLanguges
  }
    
  

 

}
