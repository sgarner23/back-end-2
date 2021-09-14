const express = require("express")
const cors = require("cors")

const app = express();

const ctrl = require('./controller.js')



app.use(express.json())
app.use(cors())

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)


const port = 4004;
app.listen(port, console.log(`Running on ${port}`));
