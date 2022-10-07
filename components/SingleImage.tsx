import { useState } from "react";
import Image from "react-image-enlarger";

type SingleImageProps = {
  src: string;
};

const SingleImage = ({ src }: SingleImageProps) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <Image
      style={{ width: "400px", height: "auto" }}
      zoomed={zoomed}
      src={src} // react-image-enlarger does not allow "alt" - would investigate further if real project
      onClick={() => setZoomed(true)}
      onRequestClose={() => setZoomed(false)}
    />
  );
};

export default SingleImage;
