import React, { Component } from 'react';

class ImageList extends Component {
  render() {
    const style = {
      width: '200px'
    };
    return (
      <div>
        {this.props.useImages.map(image => {
          return <img key={image.id} src={image.urls.regular} alt="" style={style} />
        })}
      </div>
    );
  }
}

export default ImageList;
