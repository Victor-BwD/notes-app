const Annotations = require('../models/AnnotationData');

module.exports = {
    async read(request, response) {
        const annotationList = await Annotations.find();

        return response.json(annotationList);
    },

    create(request, response) {
        const {title, notes, priority } = request.body;

        console.log(title)
        console.log(notes)
        console.log(priority)
    }
}