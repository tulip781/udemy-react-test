import React, { Component } from 'react';

class ImageList extends Component {
  state = { images: ['https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'] }
  render() {
    return (

<img src={image}> </img>

    )
  }
}

export default ImageList;
