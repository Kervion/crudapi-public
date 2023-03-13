import Select from "./Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Deezerright(props) {
  return (
    <div class="w-full relative bg-gradient-to-l from-slate-700 to-slate-900">
      <div class="absolute left-10 top-10 text-white">
        <h1 class="text-2xl pb-4 text-slate-600">Simple API : Deezer</h1>
        <Select />
        <br />
        <br />
        <div class="italic mt-6 text-slate-400">by {props.item.author}</div>
        <div class="text-5xl mt-4 text-slate-400 hover:text-slate-100 max-w-[500px]">
          <FontAwesomeIcon icon={faLink} />
          <a href={props.item.link} target="_blank" rel="noreferrer" class="ml-4">
            {props.item.title}
          </a>
        </div>
        <br />
        {props.vis && (
          <audio controls loop>
            <source src={props.item.music} type="audio/mpeg" />
          </audio>
        )}
      </div>
    </div>
  );
}
export default Deezerright;
