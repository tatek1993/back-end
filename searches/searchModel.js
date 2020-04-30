const db = require('../database/dbConfig.js');

module.exports = {
    add, findById, getAllSearchesByUser, update, remove
    // update, remove, find, findBy,
};

const mapStrain = (strain) => {
    
    if(typeof strain === 'string') {
        return strain
    } else {
    strain.effects = strain.effects.split(',');
    strain.flavor = strain.flavor.split(',');
    return strain;
    }
};

const mapSearch = (search, results) => {

    search.results = results.map(mapStrain);
    search.effect = search.effect.split(',');
    search.flavor = search.flavor.split(',');
    search.symptoms = search.symptoms.split(',');
    return search;
};

let searchRow = search => ({
    "user_id": search.user_id,
    "effect": search.effect.toString(),
    "flavor": search.flavor.toString(),
    "symptoms": search.symptoms.toString()
});

let resultRow = (search_id, result_number, strain_name) => ({
    search_id,
    result_number,
    strain_name
});

function add(search) { 

    return db('searches')
        .insert(searchRow(search), ['id'])
        .then(inserted => {
            const resultRows = search.results.map((strain, index) => {
                
                return {
                    "search_id": inserted[0],
                    "result_number": (index+1),
                    "strain_name": strain
                }
            })
            return db('results')
                .insert(resultRows)
                .then(() => {
                    search.id = inserted[0];
                    return search;
                })
        })
}

function findById(searchId) {
    return db('results as r')
        .join('strains as str', 'str.strain', 'r.strain_name' )
        .select('str.*')
        .orderBy('r.result_number')
        .where('r.search_id', searchId)
        .then(results => {
            return db('searches')
            .where({ id: searchId })
            .first()
            .then(search => {
                return mapSearch(search, results); 
            })
        })     
}

function getAllSearchesByUser(userId) {
    return db('searches')
        .where({user_id: userId})
        .then(searches => {
            return db('searches as se')
                .join('results as r', 'se.id', 'r.search_id')
                // .join('strains as str', 'str.strain', 'r.strain_name' )
                // .select('str.*', 'r.search_id')
                .select('r.strain_name', 'r.search_id')
                .where('se.user_id', userId)
                .orderBy('se.id', 'r.result_number')
                .then(results => {
                    return searches.map(search => {
                        return mapSearch(
                            search, 
                            results.filter(result => result.search_id == search.id)
                                    .map(result => result.strain_name)
                        );
                    })
                })
        })
}

function update(update) {
    
    let promise = db('searches')
        .where('id', update.id)    
        .update(searchRow(update));

    update.results.forEach((result, index) => {
        
        promise = promise.then(() => {
            return db('results')
            .where({
                'search_id': update.id,
                'result_number': index+1
            })
            .update(resultRow(update.id, index+1, result))
        })
    }) 
    return promise;
}

function remove(searchId) {
    return db('searches')
        .where('id', searchId)
        .del()
}

//   search = {
//         "user_id": 1,
//         "effect": [],
//         "flavor": [],
//         "symptoms": [],
//         "results":[one, two, three, four, five]
//     }