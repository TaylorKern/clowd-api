// Specify the user sign in/out end point

import express from 'express'
import UserController from '@/http/controller/UserController'
const users = express.Router()

users.get('/secure', (req, res) => {
  res.send('secure response from' + JSON.stringify(req.user))
})

users.get('/checkuser', UserController.checkUsers)

users.get('/notsecure', (req, res) => {
  res.send('hi')
  console.log('server hi')
})

export default users
