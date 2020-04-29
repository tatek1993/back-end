
exports.up = function(knex) {
  return knex.schema.createTable('searches', searches => {
    searches
            .increments();

    searches
            .string('effect')
            .notNullable();
    
    searches
            .string('flavor')
            .notNullable();
    
    searches
            .string('symptoms')
            .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('searches');
};

// {'first': 
//     {
//     'Strain': ['Strawberry-Amnesia'],
    
//     'Type': ['sativa'],

//     'Rating': [4.5],

//     'Flavor': ['Strawberry,Sweet,Earthy'],

//     'Effects': ['Creative,Relaxed,Uplifted,Euphoric,Energetic'],

//     'Description': ['A powerful and uplifting flower from Dinafem Seeds, Strawberry Amnesia is a strain made in sativa heaven. Bred from Strawberry Cough and Amnesia, this strain delivers the familiar sweet strawberry and earthy flavors of its parents. Having the typical energizing and euphoric effects of a sativa, Strawberry Amnesia also induces the calming body high from its distant indica relatives. The dark green buds of Strawberry Amnesia are very dense and heavily coated in resin, so this potent sativa should be handled with caution. ']
//     },

// 'second': 
//     {
//     'Strain': ['Strawberry-Amnesia'],

//     'Type': ['sativa'],

//     'Rating': [4.5],

//     'Flavor': ['Strawberry,Sweet,Earthy'],

//     'Effects': ['Creative,Relaxed,Uplifted,Euphoric,Energetic'],

//     'Description': ['A powerful and uplifting flower from Dinafem Seeds, Strawberry Amnesia is a strain made in sativa heaven. Bred from Strawberry Cough and Amnesia, this strain delivers the familiar sweet strawberry and earthy flavors of its parents. Having the typical energizing and euphoric effects of a sativa, Strawberry Amnesia also induces the calming body high from its distant indica relatives. The dark green buds of Strawberry Amnesia are very dense and heavily coated in resin, so this potent sativa should be handled with caution.  ']
// },
//     'third': {'Strain': ['Strawberry-Amnesia'],
//     'Type': ['sativa'],
//     'Rating': [4.5],
//     'Flavor': ['Strawberry,Sweet,Earthy'],
//     'Effects': ['Creative,Relaxed,Uplifted,Euphoric,Energetic'],
//     'Description': ['A powerful and uplifting flower from Dinafem Seeds, Strawberry Amnesia is a strain made in sativa heaven. Bred from Strawberry Cough and Amnesia, this strain delivers the familiar sweet strawberry and earthy flavors of its parents. Having the typical energizing and euphoric effects of a sativa, Strawberry Amnesia also induces the calming body high from its distant indica relatives. The dark green buds of Strawberry Amnesia are very dense and heavily coated in resin, so this potent sativa should be handled with caution.  ']},
//     'fourth': {'Strain': ['Strawberry-Amnesia'],
//     'Type': ['sativa'],
//     'Rating': [4.5],
//     'Flavor': ['Strawberry,Sweet,Earthy'],
//     'Effects': ['Creative,Relaxed,Uplifted,Euphoric,Energetic'],
//     'Description': ['A powerful and uplifting flower from Dinafem Seeds, Strawberry Amnesia is a strain made in sativa heaven. Bred from Strawberry Cough and Amnesia, this strain delivers the familiar sweet strawberry and earthy flavors of its parents. Having the typical energizing and euphoric effects of a sativa, Strawberry Amnesia also induces the calming body high from its distant indica relatives. The dark green buds of Strawberry Amnesia are very dense and heavily coated in resin, so this potent sativa should be handled with caution.  ']},
//     'fifth': {'Strain': ['Strawberry-Amnesia'],
//     'Type': ['sativa'],
//     'Rating': [4.5],
//     'Flavor': ['Strawberry,Sweet,Earthy'],
//     'Effects': ['Creative,Relaxed,Uplifted,Euphoric,Energetic'],
//     'Description': ['A powerful and uplifting flower from Dinafem Seeds, Strawberry Amnesia is a strain made in sativa heaven. Bred from Strawberry Cough and Amnesia, this strain delivers the familiar sweet strawberry and earthy flavors of its parents. Having the typical energizing and euphoric effects of a sativa, Strawberry Amnesia also induces the calming body high from its distant indica relatives. The dark green buds of Strawberry Amnesia are very dense and heavily coated in resin, so this potent sativa should be handled with caution.  ']}}