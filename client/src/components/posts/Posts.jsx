import Post from "../post/Post";
import { v4 as uuidv4 } from "uuid";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => {
        return <Post key={uuidv4()} post={p} />;
      })}
    </div>
  );
}
