import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type PostProps = {
  title: string;
  body: string;
};

const Post = ({ title, body }: PostProps) => {
  return (
    <Card sx={{ minWidth: 275, mx: 32, my: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comments</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
