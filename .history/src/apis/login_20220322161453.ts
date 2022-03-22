import request from '@/servers/request';

function login(url, parmes = {}){
  return request.post({
        url, data:parmes
        })
}

