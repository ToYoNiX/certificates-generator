import express from 'express'
const app = express()

import homePage from './views/homePage'

console.log(homePage)

app.get('/', (req, res) => {
	res.send(homePage)
})

app.listen(3000, () => {
	console.log("The app is available at http://localhost:3000/")
})
