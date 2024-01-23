import yellowLine from "../assets/coding/yellow-line.svg";
import singleYellowLineStation from "../assets/shared/stop-yellow.svg";
import { Map } from "../components/map/Map";
import { MapDirection, equallySpace } from "../components/map/MapElement";
import { Line } from "../components/map/transit/Line";
import { Station } from "../components/map/transit/Station";
import { StationLabel } from "../components/map/transit/StationLabel";
import { CodingOverlay } from "../components/overlays/Coding/CodingOverlay";
import { Lines } from "../map/lines";

export function Coding() {
  return (
    <div>
      <Map>
        {/* Lines */}
        <Line
          src={yellowLine}
          name="yellow line"
          position={{ x: -1140, y: 700 }}
        />

        {/* Stations */}
        <Station
          src={singleYellowLineStation}
          name="home"
          position={({ width: quadrantWidth }) => ({
            x: equallySpace(MapDirection.Right, quadrantWidth, 2, 204),
            y: -219,
          })}
        />

        <StationLabel
          label="Home"
          linkTo="/"
          position={({ width: quadrantWidth }) => ({
            x: equallySpace(MapDirection.Right, quadrantWidth, 2, 172),
            y: -190,
          })}
          servedLines={[Lines.yellow]}
        />
      </Map>

      <CodingOverlay />
    </div>
  );
}
