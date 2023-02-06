const Annotations = require('../models/AnnotationData');

module.exports = {
    async update(request, response) {
        const { id } = request.params;
        const { notes } = request.body;

        const annotation = await Annotations.findOne({_id : id});

        if(notes) {
            annotation.notes = notes.replace(/\s+/g, ' ').trim(); // Ignora o espaço no começo
        

            await annotation.save();
        }

        return response.json(annotation);
    }
}