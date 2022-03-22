import request from '@/servers/request';

function login(url, parmes = {}){
  request.post({
    url, data:parmes
  })
}