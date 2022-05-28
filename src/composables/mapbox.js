
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_ACCESS_TOKEN_MAP;

//*  @elemnt String id html container
//*  @center Array [-long,lat]
//*  @marker1 Array [-long,lat] first marker
//*  @marker2 Array [-long,lat] second marker
const initMap = (element, marker1, marker2) => {
    const map = new mapboxgl.Map({
        container: element, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.063644, 4.624335], // starting position [lng, lat]
        zoom: 12 // starting zoom
    });

    new mapboxgl.Marker({ color: 'hsl(253, 85%, 24%)', rotation: 45 })
        .setLngLat([marker1.lon, marker1.lat])
        .addTo(map);
    map.flyTo({ center: [marker1.lon, marker1.lat], zoom: 12 });

    new mapboxgl.Marker({ color: 'hsl(253, 85%, 24%)', rotation: 45 })
        .setLngLat([marker2.lon, marker2.lat])
        .addTo(map);

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
}

const useCreateMap = () => {
    return { initMap };
}

export default useCreateMap