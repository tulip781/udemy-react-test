import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2ab43f635df3c2d6b193c9ba875aedea45379c15d39720060eee977ea01f1a84'
  }

});
