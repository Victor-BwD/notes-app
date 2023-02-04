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
    },

    async delete(request, response){
        const {id} = request.params;

        const annotationsDeleted = await Annotations.findOneAndDelete({
            _id : id
        })

        if(annotationsDeleted) return response.json(annotationsDeleted);

        return response.status(401).json({error: 'Não foi encontrado o registro no banco de dados para deletar.'});
    }
}