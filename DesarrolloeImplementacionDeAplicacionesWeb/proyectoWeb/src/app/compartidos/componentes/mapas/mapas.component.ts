import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, latLng, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { Coordenadas } from './coordenadas';

@Component({
  selector: 'app-mapas',
  imports: [LeafletModule],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent implements OnInit {
  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor => {
      const marcador = marker([valor.latitud, valor.longitud], this.markerOptions);
      return marcador;
    }) 
  }
  @Input() 
  coordenadasIniciales: Coordenadas[] = [];

  @Output() 
  coordenadasSeleccionadas = new EventEmitter<Coordenadas>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent) {
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    
    this.capas = [];
    this.capas.push(marker([latitud, longitud],this.markerOptions));
    this.coordenadasSeleccionadas.emit({latitud, longitud});
  }
}
