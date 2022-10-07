import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as API from "../utils/api";
import { PostProps, CommentProps } from "../utils/props";

const Post = ({ id, title, body }: PostProps) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [expanded, setExpanded] = useState<boolean>(false);

  const onClick = () => {
    console.log("clicked!");
    setExpanded(!expanded);
  };

  useEffect(() => {
    const getComments = async () => {
      const resComments = await API.getCommentsByPost(id);
      setComments(resComments);
    };
    getComments();
  }, []);

  // TODO - remove later
  console.log("comments: ", comments);
  console.log("total comments: ", comments.length);

  return (
    <Card sx={{ minWidth: 275, mx: 32, my: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      {comments.length > 0 ? (
        <>
          <CardActions>
            <Button onClick={onClick} size="small">
              {comments.length}
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography variant="h6" align="center">
              Comments
            </Typography>
            {comments.map((comment) => (
              <CardContent sx={{ my: 4, mx: 4 }}>
                <Typography>{comment.body}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  by: {comment.name}
                </Typography>
              </CardContent>
            ))}
          </Collapse>
        </>
      ) : (
        <div></div>
      )}
    </Card>
  );
};

export default Post;
