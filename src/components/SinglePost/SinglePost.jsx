import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="SinglePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipssum teheh
          <div className="singlepostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author: <b>Priyanka</b>
          </span>
          <span className="singlePostDate">1 hours ago</span>
        </div>
        <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quaerat atque magni, tempora mollitia perferendis placeat commodi id
          eum dignissimos, quibusdam, quod dicta? Similique omnis odit quo
          labore ipsam quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quaerat atque magni, tempora mollitia perferendis placeat commodi id
          eum dignissimos, quibusdam, quod dicta? Similique omnis odit quo
          labore ipsam quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quaerat atque magni, tempora mollitia perferendis placeat commodi id
          eum dignissimos, quibusdam, quod dicta? Similique omnis odit quo
          labore ipsam quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quaerat atque magni, tempora mollitia perferendis placeat commodi id
          eum dignissimos, quibusdam, quod dicta? Similique omnis odit quo
          labore ipsam quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quaerat atque magni, tempora mollitia perferendis placeat commodi id
          eum dignissimos, quibusdam, quod dicta? Similique omnis odit quo
          labore ipsam quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quaerat atque magni, tempora mollitia perferendis placeat commodi id
          eum dignissimos, quibusdam, quod dicta? Similique omnis odit quo
          labore ipsam quod?
        </p>
      </div>
    </div>
  );
}
