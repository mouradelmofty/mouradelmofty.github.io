import React, {Component} from 'react';
import ReactPlayer from "react-player";


class Gallery extends Component {
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}} className="container-fluid">
      <ReactPlayer url="https://www.youtube.com/watch?v=Gf37Rc-hDVo&t=521s" />



      </div>
    );
  }
}

export default Gallery;
