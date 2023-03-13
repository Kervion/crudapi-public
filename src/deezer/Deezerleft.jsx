import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

function Deezerleft(props) {
  const [flip, set] = useSpring(() => ({ transform: "scaleX(-1)" }));
  useEffect(() => {
    props.vis ? set({ transform: "scaleX(1)" }) : set({ transform: "scaleX(-1)" });
    // eslint-disable-next-line
  }, [props.vis]);

  return (
    <div class="bg-slate-800 w-full relative bg-gradient-to-r from-slate-700 to-slate-900">
      {props.vis && (
        <animated.img
          style={{
            transformOrigin: "50% 50%",
            transform: flip.transform,
          }}
          src={props.item.cover}
          class="w-[500px] absolute right-10 top-10 mix-blend-luminosity shadow-2xl"
          alt="cover"
        />
      )}
    </div>
  );
}
export default Deezerleft;
