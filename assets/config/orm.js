const orm = {
    findAll: function(model, callback) {
        model.find({}, null, null, (err,  results) => {
            if (err) console.log(err);
            return callback(results);
        })
    },

    findOne: function(model, conditions, callback) {
        model.find(conditions, null, null, (err, results) => {
            if (err) console.log(err);
            return callback(results);
        })
    },

    addOne: function(model, document, callback) {
        model.create(document).then( returned => {
            return callback(returned);
        })
    }
};

module.exports = orm;