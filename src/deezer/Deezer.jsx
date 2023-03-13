import axios from "axios";
import { useEffect, useState } from "react";
import Deezerleft from "./Deezerleft";
import Deezerright from "./Deezerright";
import tstore from "../scripts/tstore";
import Modal from "react-modal";

const apikey = process.env.REACT_APP_APIKEY;

Modal.setAppElement("#root");

function Deezer() {
  const strack = tstore((state) => state.track);
  const [track, setTrack] = useState(strack);
  useEffect(() => {
    setTrack(strack);
  }, [strack]);
  if (track === "") setTrack("1196693672");

  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [item, setItem] = useState({
    title: "",
    author: "",
    cover: "",
    music: "",
    link: "",
  });
  const [vis, setVis] = useState(false);
  const instance = axios.create({
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com/track/",
    headers: {
      "X-RapidAPI-Key": apikey,
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  });

  useEffect(() => {
    if (track !== "") {
      setVis(false);
      setItem({
        title: "",
        author: "",
        cover: "",
        music: "",
        link: "",
      });
      fireAxios();
    }
    // eslint-disable-next-line
  }, [track]);

  const fireAxios = () => {
    instance
      .get(track)
      .then(function (response) {
        setVis(true);
        setItem({
          ...item,
          title: response.data.title,
          author: response.data.artist.name,
          cover: response.data.album.cover_xl,
          music: response.data.preview,
          link: response.data.link,
        });
      })
      .catch(function (error) {
        setIsOpen(true);
        // console.log(error);
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog" className="mymodal" overlayClassName="myoverlay">
        <div>
          API service error...
          <br />
          track no. : {track}
        </div>
      </Modal>
      <div class="h-screen flex flex-col bg-slate-800">
        <div class="w-full flex flex-row justify-center grow">
          <Deezerleft item={item} vis={vis} class="w-1/2" />
          <Deezerright item={item} vis={vis} class="w-1/2" />
        </div>
      </div>{" "}
    </>
  );
}
export default Deezer;
