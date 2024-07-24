import express from 'express'
import os from 'os'

const app = express();

app.get("/" , (req,res) => {
    const helloMessage = `Hello from the ${os.hostname}`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(5000, () => {
    console.log(`web server is listening at port 5000`);
})

//nwattuwe 1:45:30n