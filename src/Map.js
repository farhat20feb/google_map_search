import { useSelector } from 'react-redux'
import { GoogleMap, Marker } from '@react-google-maps/api';


function Map() {
  let lat_lng = useSelector((state) => state.latlng) 
  let LatLngArr =  lat_lng.value.split(',')
  return (
    <div className="Map">
      <GoogleMap 
        zoom={10}
        center={{lat : Number(LatLngArr[0]), lng : Number(LatLngArr[1])}}
        mapContainerClassName='map-container'  
        >
         <Marker position={{lat : Number(LatLngArr[0]), lng : Number(LatLngArr[1])}}/>   
        </GoogleMap>
    </div> 
  ); 
}

export default Map;
