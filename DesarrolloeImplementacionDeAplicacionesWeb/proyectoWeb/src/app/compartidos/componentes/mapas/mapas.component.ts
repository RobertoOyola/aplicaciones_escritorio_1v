import { Component } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, latLng, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapas',
  imports: [LeafletModule],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  markerOptions:MarkerOptions= {
    icon: icon({
      iconSize:[25, 41],
      iconAnchor:[13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }

  capas: Marker<any>[]=[];

  manejarClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;

    this.capas = [];
    this.capas.push(marker([latitude, longitude],this.markerOptions))
  }
}
