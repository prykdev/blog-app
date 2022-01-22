import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">Lorem, ipsum dolor sit amet </span>
        <hr className="line" />

        <span className="postDate">1 hours ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quam
        nobis quidem soluta voluptates quia eveniet architecto blanditiis omnis
        tempora eius culpa repellat, magnam, praesentium libero aperiam
        temporibus dolore ipsum.
      </p>
    </div>
  );
}
