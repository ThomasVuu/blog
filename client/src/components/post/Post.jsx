import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <img src={img} alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        assumenda sed placeat rerum asperiores nam itaque magnam, fuga pariatur
        accusantium debitis rem facilis vel repudiandae minima iusto eligendi!
        Dolorem, nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo assumenda sed placeat rerum asperiores nam itaque magnam, fuga
        pariatur accusantium debitis rem facilis vel repudiandae minima iusto
        eligendi! Dolorem, nobis! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Explicabo assumenda sed placeat rerum asperiores nam
        itaque magnam, fuga pariatur accusantium debitis rem facilis vel
        repudiandae minima iusto eligendi! Dolorem, nobis!
      </p>
    </div>
  );
}
