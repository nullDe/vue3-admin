import request from '@/servers/request';

export function login(parmes = {}){
  return request.post({
      url: '/login',
      data:parmes
  })
} 

