import { SpinnerRound } from "spinners-react";

function Loader() {
  return (
    <SpinnerRound
      size={72}
      thickness={148}
      speed={65}
      color="rgba(57, 141, 172, 0.73)"
    />
  );
}

export default Loader;
