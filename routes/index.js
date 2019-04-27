import * as router from './router' 

export default function initRoutes(app) {
  app.use('/', router.indexRouter)
  app.use('/student', router.studentRouter)
  app.use('/search', router.searchRouter)
}