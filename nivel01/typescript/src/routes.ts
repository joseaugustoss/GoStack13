import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'guto@gmail.com',
    password: '12345',
    techs:[
      'nodejs',
      'ractjs',
      'React native',
      {title: 'JavaScript', experience: 123}
    ]
  })

  return response.json({message: 'Hello world!!!'})
}