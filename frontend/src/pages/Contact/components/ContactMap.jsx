import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -38.1467,
  lng: 144.3617,
};

const coffeeStyleMap = [
  {
    elementType: "geometry",
    stylers: [{ color: "#cfcfcf" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#6f6f6f" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#cfcfcf" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#efefef" }],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#bdbdbd" }],
  },
];

const ContactMap = () => {
  return (
    <div className="absolute inset-0">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          options={{
            styles: coffeeStyleMap,
            disableDefaultUI: true,
            scrollwheel: false,
            draggable: true,
          }}
        />
      </LoadScript>

      <div className="pointer-events-none absolute inset-0 bg-gray-900/40" />
    </div>
  );
};

export default ContactMap;
