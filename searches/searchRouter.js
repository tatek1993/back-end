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

// get a search and its results and the strain info for each result
router.get('/:id', (req, res) => {
    let userId = req.decodedToken.subject;
    Search.findById(req.params.id, userId)
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

router.get('/', (req, res) => {
    let userId = req.decodedToken.subject;
    Search.getAllSearchesByUser(userId)
    .then(search => {
        res.status(200).json(search)
    })
    .catch( err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'The Treatment Search could not be retrieved.'})
    });
})

router.put('/:id', (req, res) => {
    const updatedSearch = req.body;
    updatedSearch.id = req.params.id;
    if (updatedSearch.results.length ==! 5) {
        console.log('There was a problem with your list of results', req.params.id, updatedSearch);
        res.status(400).json({ errorMessage: 'There must be 5 strain results.'})
        return;
    } 
    let userId = req.decodedToken.subject;
    Search.update(updatedSearch, userId)
    .then(search => {
        return Search.findById(req.params.id, userId)
        .then(search => {
            if(search === undefined) {
                res.status(404).json({ errorMessage: "The search with the specified ID does not exist." })
            } else {
                res.status(200).json({ message: 'Search successfully updated, good job!', search})
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'That search information could not be updated.'})
    })
})

router.delete('/:id', (req, res) => {
    Search.remove(req.params.id)
      .then(search => {
          if (search === undefined) {
              res.status(404).json({message: "The search with the specified ID does not exist."})
          } else {
              res.status(200).json(search)
          }
          
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({ 
              error: "The search could not be removed" 
          });
      });
  });

module.exports = router;