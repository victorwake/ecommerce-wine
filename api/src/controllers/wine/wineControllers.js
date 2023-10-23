import Wine from '../../models/Wine';

export const createWine = async (req, res) => {
    try {
        const { name, varietal, color_type, winery, price, image, stock, year, province, region, alcohol, volume, url, description, } = req.body;

        const savedWine = await Wine.create({
            name,
            varietal,
            color_type,
            winery,
            price,
            image,
            stock,
            year,
            province,
            region,
            alcohol,
            volume,
            url,
            description,
        });


        res.status(201).json(savedWine);
    } catch (error) {
        console.error('Error al crear el vino:', error);
        res.status(500).json({ error: 'Error al crear el vino' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

export const deleteWineById = async (req, res) => {
    try {
        const { wineId } = req.params;
        const deletedWine = await Wine.findByIdAndDelete(wineId);

        if (!deletedWine) {
            return res.status(404).json({ error: 'vino no encontrado' });
        }

        res.status(200).json({ message: 'vino eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el Wineo por ID:', error);
        res.status(500).json({ error: 'Error al eliminar el vino por ID' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

export const updateWineById = async (req, res) => {
    try {
        const { wineId } = req.params;
        const updatedData = req.body;

        const updatedWine = await Wine.findByIdAndUpdate(wineId, updatedData, { new: true });

        if (!updatedWine) {
            return res.status(404).json({ error: 'vino no encontrado' });
        }

        res.status(200).json(updatedWine);
    } catch (error) {
        console.error('Error al actualizar el vino por ID:', error);
        res.status(500).json({ error: 'Error al actualizar el vino por ID' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

export const getWines = async (req, res, next) => {
    try {
        const { name } = req.query;
        let query = {};

        if (name) {
            if (name === "winery") {
                query = { winery: { $regex: new RegExp(name, "i") } };
            } else {
                query = { name: { $regex: new RegExp(name, "i") } };
            }
        }

        const wines = await Wine.find(query);

        if (wines.length > 0) {
            res.status(200).json(wines);
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

export const getWineById = async (req, res) => {
    try {
        const { wineId } = req.params;
        const wine = await Wine.findById(wineId);

        if (!wine) {
            return res.status(404).json({ error: 'vino no encontrado' });
        }

        res.status(200).json(wine);
    } catch (error) {
        console.error('Error al buscar el Wineo por ID:', error);
        res.status(500).json({ error: 'Error al buscar el vino por ID' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

export const getColorType = async (req, res) => {
    let type = req.query.type;
    try {
        const wineTypeFind = await Wine.find({
            color_type: new RegExp(type, 'i') // Búsqueda insensible a mayúsculas y minúsculas
        });

        if (wineTypeFind.length > 0) {
            res.status(200).json(wineTypeFind);
        } else {
            res.status(400).json({
                msg: 'Acción no permitida, indica un color_type que corresponda'
            });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////