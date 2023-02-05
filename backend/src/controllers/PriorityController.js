const Annotations = require('../models/AnnotationData');

module.exports = {
    async read(request, response) {
        const priority = request.query;

        const priorityNodes = await Annotations.find(priority);

        return response.json(priorityNodes);
    }
}