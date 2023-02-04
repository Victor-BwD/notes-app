const Annotations = require('../models/AnnotationData');

module.exports = {
    async read(request, response) {
        const annotationList = await Annotations.find();

        return response.json(annotationList);
    },

    async create(request, response) {
        const {title, notes, priority } = request.body;

        if(!notes || !title) return response.status(400).json({error: "Necessário um título/anotação!"});

        const annotationCreated = await Annotations.create({
            title, 
            notes,
            priority
        })

        return response.json(annotationCreated);
    }
}