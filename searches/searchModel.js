const db = require('../database/dbConfig.js');

module.exports = {
    add, find, findBy, findById, update, remove,
};

function add(search) { 
    let searchRow =
    {
        "user_id": search.user_id,
        "effect": search.effect.toString(),
        "flavor": search.flavor.toString(),
        "symptoms": search.symptoms.toString()
    }

    return db('searches')
        .insert(searchRow, ['id'])
        .then(inserted => {
            const resultRows = search.results.map((strain, index) => {
                return {
                    "search_id": inserted[0].id,
                    "result_number": (index+1),
                    "strain_name": strain
                }
            })
            return db('results')
                .insert(resultRows)
        })
}

function findById(searchId) {
    return db('results as r')
        .join('strains as str', 'str.strain', 'r.strain_name' )
        .select('str.*')
        .where('r.search_id', searchId)
        .then(results => {
            return db('searches')
            .where({ id })
            .first()
            .then(search => {
                search.results = results
                return search
            })
        })     
}



 // search = {
    //     "user_id": 1,
    //     "effect": [],
    //     "flavor": [],
    //     "symptoms": [],
    //     "results":[one, two, three, four, five]
    // }