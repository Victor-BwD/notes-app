const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
});

module.exports = mongoose.model('Annotations', AnnotationDataSchema);