const fs = require('fs');

export default (req, res) => {
  if (req.method === 'POST') {
    fs.writeFile('/tmp/helloworld.txt', req.body?.text, function (err) {
      if (err) {
        res.status(500).json({ error: 'Error in file write' })
        return console.log(err);
      }
      res.status(200).json({ ok: `${req.body?.text} saved in helloworld.txt` })
    });
  }

  if (req.method === 'GET'){
    fs.readFile('/tmp/helloworld.txt', 'utf8' , (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      res.status(200).json({ data })
    })
  }
}
