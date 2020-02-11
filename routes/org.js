var express = require('express');
var router = express.Router();

const CosmosClient = require('@azure/cosmos').CosmosClient;

const config = require('./db.config');

const endpoint = config.endpoint;
const key = config.key;

const client = new CosmosClient({ endpoint, key });

const databaseID = config.database.id;

const containerID = 'org';

router.get('/', async function(req, res, next) {
    const { container } = await client
        .database(databaseID)
        .containers.createIfNotExists(
        { id: containerID }
        )
    
    const companiesQuery = {
        query: "SELECT * FROM root r WHERE r.type='company'"
      };
    const {resources: companies} = await container.items.query(companiesQuery).fetchAll()

    const centersQuery = {
        query: "SELECT * FROM root r WHERE r.type='center'"
      };
    const {resources: centers} = await container.items.query(centersQuery).fetchAll()

    const apartmentsQuery = {
        query: "SELECT * FROM root r WHERE r.type='apartment'"
      };
    const {resources: apartments} = await container.items.query(apartmentsQuery).fetchAll()

    const softNotificationsQuery = {
        query: "SELECT * FROM root r WHERE r.type = 'sleepTime' OR r.type = 'activeTime' OR r.type = 'bathroomVisits' OR r.type = 'currentLocation' "
      };
    const {resources: softNotifications} = await container.items.query(softNotificationsQuery).fetchAll()

    const residentsQuery = {
        query: "SELECT * FROM root r WHERE r.type = 'resident'"
    }
    const {resources: residents} = await container.items.query(residentsQuery).fetchAll()

    const apartmentsFinal = await apartments.map(a => {
        const r = residents.filter(r => r.apartmentID === a.id)[0]
        const s = softNotifications.filter(s => s.hubName === a.hubID)

        return {
            ...a,
            resident: r ? r : null,
            softNotifications: s
        }
    })

    const centersFinal = await centers.map(c => {
        return {
            ...c,
            apartments: apartmentsFinal.filter(a => a.centerID === c.id)
        }
    })

    const final = await companies.map(c => {
        return {
            ...c,
            centers: centersFinal.filter(ce => ce.companyID === c.id)
        }
    })

    res.json(final)
});

module.exports = router;
