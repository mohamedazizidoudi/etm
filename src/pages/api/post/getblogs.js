import db from '../../../../db/connect'
export default function handler(req, res) {
    db.query("SELECT * FROM blogs",(err,response)=> {
        if (err) {
            console.log(err);
          res.status(500).send(err);
          return;
        }
        res.send(response);
    })
}