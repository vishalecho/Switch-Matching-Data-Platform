const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const { Client } = require('pg')
const { Pool } = require('pg')

const pool = new Pool(
  {
    user: 'postgres',
    host: 'localhost',
    database: 'dbswiftmatch',
    password: 'postgres',
    port: 5432,
  }
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// end-point for query all the client proposed data 
app.get('/getClientData', (req, res) => {
 
  const query = {
    name: 'fetch-client-proposed-data',
    text: 'select * from table_client_data',
  }
  pool.connect()
  .then(client => {
    return client.query(query)
      .then(result => {
        client.release()
        console.log("RESULT:", result.rows)
        res.status(200).send(result.rows);
      })
      .catch(e => {
        console.log(e)
        client.release()
        res.status(400).send(e);
      })
  })

})

// end-point to query all the sg proposed data
app.get('/getSGData', (req, res) => {
    const query = {
      name: 'fetch-sg-proposed-data',
      text: 'select * from table_sg_data',
    }
    pool.connect()
    .then(client => {
      return client.query(query)
        .then(result => {
          client.release()
          console.log("RESULT:", result.rows)
          res.status(200).send(result.rows);
        })
        .catch(e => {
          console.log(e)
          client.release()
          res.status(400).send(e);
        })
    })
  
  })

app.listen(9000, () => {
  console.log('APIs Listening on port: 9000')
})