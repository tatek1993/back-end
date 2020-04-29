const db = require('../database/dbConfig.js');

module.exports = {
    add, find, findBy, findById, update, remove,
};

function add(search) {
    // search = {
    //     "user_id": 1,
    //     "effect": [],
    //     "flavor": [],
    //     "symptoms": [],
    //     "results":[one, two, three, four, five]
    // }
    
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




