import request from '@/servers/request';

export function login(parmes = {}){
  return request.post('/login',{
      data:parmes
  })
} 

