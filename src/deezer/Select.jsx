import { useState } from "react";
import tstore from "../scripts/tstore";

function Select() {
  const setTrack = tstore((state) => state.setTrack);
  const track = tstore((state) => state.track);
  const [selectedValue, setSelectedValue] = useState(track);

  const tracks = [
    {
      label: "Calm Flow",
      value: "1196693672",
    },
    {
      label: "My Ty She",
      value: "141371247",
    },
    {
      label: "Time",
      value: "6524423",
    },
    {
      label: "Internal Flight",
      value: "477233062",
    },
    {
      label: "The Heart of The Sun",
      value: "13795567",
    },
  ];

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setTrack(e.target.value);
  };

  return (
    <select
      id="select"
      value={selectedValue}
      onChange={handleSelectChange}
      class="text-slate-800 bg-slate-300 p-2 focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-2"
    >
      {tracks.map((track) => (
        <option key={track.value} value={track.value}>
          {track.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
