import init from './express'

export default function start() {
  const app = init()
  app.listen(5000, () => { console.log('server started') })
}