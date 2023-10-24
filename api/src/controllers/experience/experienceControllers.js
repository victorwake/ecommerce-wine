import Experience from '../../models/Experience';


export const getExperience = async (req, res, next) => {
    try {
        const experience = await Experience.find();

        if (experience.length > 0) {
            res.status(200).json(experience);
        } else {
            res.status(400).json({ msg: "No hay resultados para tu búsqueda" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Ha ocurrido un error en el servidor" });
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////


export const createExperience = async (req, res) => {
    try {
        const { 
            name,
            price,
            ubication,
            kindOfExp,
            eventDate,
            image,
            url,
            description,
         } = req.body;

         const newExperience = new Experience({
            name,
            price,
            ubication,
            kindOfExp,
            eventDate,
            image,
            url,
            description,
        });
        const savedExperience = await newExperience.save();

        res.status(201).json(savedExperience);
    } catch (error) {
        console.error('Error al crear el experiencia:', error);
        res.status(500).json({ error: 'Error al crear la experiencia' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

export const updateExperience = async (req, res) => {
    try {
        const { id } = req.query;
        const updateData = req.body; 

        const updatedExperience = await Experience.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedExperience) {
            return res.status(404).json({ error: 'La experiencia no fue encontrada' });
        }

        res.status(200).json(updatedExperience);
    } catch (error) {
        console.error('Error al actualizar la experiencia:', error);
        res.status(500).json({ error: 'Error al actualizar la experiencia' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

export const deleteExperience = async (req, res) => {
    try {
        const { id } = req.query;

        const deletedExperience = await Experience.findByIdAndRemove(id);

        if (!deletedExperience) {
            return res.status(404).json({ error: 'La experiencia no fue encontrada' });
        }

        res.status(204).end();
    } catch (error) {
        console.error('Error al eliminar la experiencia:', error);
        res.status(500).json({ error: 'Error al eliminar la experiencia' });
    }
};




