const router = require('express').Router();
const Search = require('./searchModel.js');
const db = require('../database/dbConfig.js');

router.post('/', (req, res) => {
    const searchData = req.body;

    Search.add(searchData)
        .then(search => {
            res.status(201).json({message: 'Treatment Search was saved successfully', search})
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'There was an error while trying to save the Treatment Search to the database'})
        });
});

// get an entire search and its results
router.get('/:id', (req, res) => {
    Search.findById(req.params.id)
    .then(search => {
        if (search === undefined) {
            res.status(404).json({ errorMessage: "The Treatment Search with the specified ID does not exist."})
        } else {
            res.status(200).json(search)
        }
    })
    .catch( err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'The Treatment Search could not be retrieved.'})
    });
});