const express = require('express')
const app = express()
const port = 3000


app.get('/version', (req, res) => {
 log('/version');
 res.send('Version 0 of the HotBurger service')
}
);

log = (arg) => {
    console.log(`Log in for ${arg}`)
}

app.listen(port, () => console.log(`Connection has been made`));

app.get('/logs', (req, res) => {
    log('/logs');
    
});


