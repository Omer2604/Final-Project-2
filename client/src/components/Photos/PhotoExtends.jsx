import { Component } from "react";

class PhotoExtends extends Component {
  handleChange = (e) => {
    const data = [...this.state.data];
    let photos = data;
    const searchTerm = e.target.value;
    const photosFiltered = photos.filter((photo) => {
      return (
        photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.bizNumber.includes(searchTerm.toLowerCase())
      );
    });
    this.setState({ photos: photosFiltered });
  };
}

export default PhotoExtends;
