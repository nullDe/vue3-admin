import axios from 'axios';
import qs from 'qs';

const request = axios.create();
export function Axios(){
  return new Promise(()=>{
    axios({
      method: 'post',
      url: '/user/12345',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
  })
}