import express from 'express'
import bodyParser from 'body-parser'
import initRoutes from '../routes'
import path from 'path'

function initMiddlewares(app) {  
  app.use(bodyParser.json());  // this is important caused a lot of time waste.
  // app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.static(path.join(__dirname, '../views')));
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));
}

export default function init() {
  const app = express()
  initMiddlewares(app)
  initRoutes(app)
  return app
}