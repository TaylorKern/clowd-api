import pool from '@/providers/DBServiceProvider'
import { SimpleHandler } from '@/http/RequestHandler'
import passport from 'passport'
import { Handler } from 'express'
import jwt = require('jsonwebtoken')

export default class UserController {
  static checkUsers: SimpleHandler = (req, res): void => {
    const a = 'chihoon'
    pool.query(
      "SELECT * FROM user WHERE `googleID` ='" + a + "'",
      ['chihoon'],
      (err, rows, fields) => {
        if (!err) {
          console.log('The solution is: ', rows)
          res.json({
            Result: rows
          })
        } else {
          console.log('Error while performing Query.', err)
          res.status(400).json({
            err: err
          })
        }
      }
    )
  }

  static googleLogin: SimpleHandler = (req, res): void => {
    passport.authenticate('google', {
      successRedirect: '/loginSuccess',
      failureRedirect: 'loginFailure'
    })
  }

  static loginSuccess: Handler = (req, res, next) => {
    res.send('Successfully authenticated')
  }

  static loginFailure: Handler = (req, res, next) => {
    res.send('Failed to authenticate')
  }
}