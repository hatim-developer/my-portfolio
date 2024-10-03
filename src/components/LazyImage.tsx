import { useState } from "react";
import { TImageProps } from "types";

const LazyImage = ({
  placeholderProps,
  imgProps,
}: {
  placeholderProps: TImageProps;
  imgProps: TImageProps;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {loaded ? null : <img {...placeholderProps}></img>}
      <img
        className={loaded ? imgProps.className || "" : "opacity-0"}
        loading="lazy"
        src={imgProps.src}
        onLoad={() => {
          setLoaded(true);
        }}
      ></img>
    </>
  );
};

export default LazyImage;
