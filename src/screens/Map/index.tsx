import React, {useState, useEffect} from 'react';
import { View } from 'react-native';


import api from '../../services/api';

import { Container,  MapContainer, MapView, ItemsContainer, Item, ItemTitle, MapMarker, MapMarkerContainer, MapMarkerCount, MapMarkerContainerCount, MapMarkerContainerTitle, MapMarkerTitle } from './styles';

interface PlaceData {
  position:string;
  name: string;
  quantidade:number;
  coords:[string, string];
}

interface DataApi { 
      position:string;
      name: string;
      quantidade:number;
}


const Map: React.FC = () => {
  const [places, setPlaces] = useState<PlaceData[]>([]);

  useEffect(()=> {
      (async ()=>{
        const response = await api.get('http://still-hamlet-22083.herokuapp.com/api/map/full');
        const {data:{locais}} = response.data;
        
        const placesCoords = locais.map((local:DataApi)=>{
            return {
              ...local,
              coords: local.position.split(',')
            }
          })
        

        setPlaces(placesCoords);

      })()
    },[]);


  return (
  <Container>
     <MapContainer>
            <MapView
              initialRegion={{ 
                latitude: -27.0322696, 
                longitude: -48.6709402, 
                latitudeDelta: 0.050, 
                longitudeDelta: 0.050 
              }}>
                 {
                  places.map((place:PlaceData)=>(
                  <MapMarker
                    key={place.name}
                    coordinate={{ latitude: Number(place.coords[0]), longitude:  Number(place.coords[1])}}
                  >
                  <MapMarkerContainer>
                    <MapMarkerContainerCount>
                  <MapMarkerCount>{place.quantidade}</MapMarkerCount>
                    </MapMarkerContainerCount>
                    <MapMarkerContainerTitle>
                  <MapMarkerTitle>{place.name}</MapMarkerTitle>
                    </MapMarkerContainerTitle>
                  </MapMarkerContainer>
                  </MapMarker>
                  ))
                } 
            </MapView>
        </MapContainer>
  </Container>
  );
}

export default Map;