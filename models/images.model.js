var mongoose = require('mongoose');
var imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },

}, {
    timestamp: true
});
// Export Contact model
module.exports = mongoose.model('images', imageSchema);