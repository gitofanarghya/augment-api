var express = require('express');
var router = express.Router();

const CosmosClient = require('@azure/cosmos').CosmosClient;

const config = require('./db.config');

const endpoint = config.endpoint;
const key = config.key;

const client = new CosmosClient({ endpoint, key });

const databaseID = config.database.id;

const containerID = 'motionData';

router.get('/', async function(req, res, next) {
    const { container } = await client
        .database(databaseID)
        .containers.createIfNotExists(
        { id: containerID }
        )
    if(req.query.hubID && req.query.ts) {
        
      const querySpec = {
          query: `SELECT * FROM root r WHERE r.hubID=@id and r.ts > ${req.query.ts}`,
          parameters: [
            {
                name: "@id",
                value: req.query.hubID
            }
          ]
        } 
      try {
        const { resources } = await container.items.query(querySpec).fetchAll()
        res.json(resources)
      } catch(err) {
        next(err)
      } 
    } else {
      try {
        throw new Error('specify hub name and minimum ts')
      } catch (err) {
        next(err)
      }
    }
    
});

module.exports = router;
