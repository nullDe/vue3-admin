import request from '@/servers/request';

function login(parmes = {}){
  return request.post({
      url: '/login',
      data:parmes
  })
} 

