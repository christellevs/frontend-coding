import type { NextPage } from "next";
import { useEffect, useState } from "react";
import * as API from "../utils/api";
import Typography from "@mui/material/Typography";
import { ImageProps } from "../utils/props";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SingleImage from "../components/SingleImage";

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
      {images.length > 0 ? (
        <ImageList sx={{ mx: 18 }} cols={4} rowHeight={164}>
          {images.map((item) => (
            <ImageListItem key={item.id}>
              <SingleImage src={item.thumbnailUrl} />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Vault;
