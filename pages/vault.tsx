import type { NextPage } from "next";
import { useEffect, useState } from "react";
import * as API from "../utils/api";
import Typography from "@mui/material/Typography";
import { ImageProps } from "../utils/props";

const Vault: NextPage = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const resImgs = await API.getAllImages();
      setImages(resImgs);
    };
    getImages();
  }, []);

  // TODO - remove later
  console.log("images: ", images);

  return (
    <div className="post-container">
      <Typography align="center" variant="h2">
        Vault
      </Typography>
    </div>
  );
};

export default Vault;
