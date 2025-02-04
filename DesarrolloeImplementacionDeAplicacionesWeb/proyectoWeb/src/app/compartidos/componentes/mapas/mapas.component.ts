import { Component, EventEmitter, Output } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, latLng, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { Coordenadas } from './coordenadas';

@Component({
  selector: 'app-mapas',
  imports: [LeafletModule],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {
  @Output() coordenadasSeleccionadas = new EventEmitter<Coordenadas>();

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
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;

    // Emitir las coordenadas seleccionadas
    this.coordenadasSeleccionadas.emit({ latitud: latitude, longitud: longitude });

    // Añadir un marcador en las coordenadas seleccionadas
    const newMarker = marker([latitude, longitude], this.markerOptions);

    // Añadir el marcador a las capas para que se muestre en el mapa
    this.capas = [newMarker];  // O usar `this.capas.push(newMarker);` si quieres agregar múltiples marcadores.
  }
}
