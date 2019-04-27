import express from 'express'
import initIndexRoutes from './api/index_router'
import initSearchRoutes from './api/search_router'
import initStudentRoutes from './api/student_router'

const indexRouter = express.Router()
const studentRouter = express.Router()
const searchRouter = express.Router()

initIndexRoutes(indexRouter)
initSearchRoutes(searchRouter)
initStudentRoutes(studentRouter)

export { indexRouter, studentRouter, searchRouter }