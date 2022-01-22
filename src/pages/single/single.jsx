import Sidebar from '../../components/sidebar/sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';

import './single.css';

export default function single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar/>
    </div>
  );
}
