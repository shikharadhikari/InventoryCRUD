import express from 'express'
import {deleteEarthquake, getAllEarthquake, getEarthquake, postEarthquake, updateEarthquake} from '../controllers/earthquake.controller.js'

const router = express.Router()


// 3. API Endpoints: 
// • GET /earthquakes: Return the full list of earthquake records. 

router.get('/earthquakes', getAllEarthquake )

// • GET /earthquakes/:id: Return a single earthquake record by its ID. 
router.get('/earthquakes/:id',getEarthquake )

// • POST /earthquakes: Add a new earthquake record. (Make sure to assign a unique ID.)
router.post('/earthquakes', postEarthquake)

// • PUT /earthquakes/:id: Update an existing earthquake record. 

router.put('/earthquakes/:id', updateEarthquake)

// • DELETE /earthquakes/:id: Delete an earthquake record.

router.delete('/earthquakes/:id', deleteEarthquake)


export default router;