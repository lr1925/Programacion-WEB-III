//1. Crea un endpoint POST /categorias que permita registrar una nueva categoría enviando nombre y descripcion en el body de la petición.
router.post('/categorias', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        const [result] = await db.query(
            'INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );

        res.status(201).json({
            mensaje: 'Categoría creada',
            id: result.insertId
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

//2. Crea un endpoint GET /categorias que devuelva todas las categorías registradas en la base de datos
router.get('/categorias', async (req, res) => {
    try {

        const [rows] = await db.query(
            'SELECT * FROM categorias'
        );

        res.json(rows);

    } catch (error) {
        res.status(500).json(error);
    }
});

//3. Crea un endpoint GET /categorias/:id que devuelva la categoría con el ID especificado y además,
//incluya todos los productos que pertenecen a esa categoría.
router.get('/categorias/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const [categoria] = await db.query(
            'SELECT * FROM categorias WHERE id = ?',
            [id]
        );

        if (categoria.length === 0) {
            return res.status(404).json({
                mensaje: 'Categoría no encontrada'
            });
        }

        const [productos] = await db.query(
            'SELECT * FROM productos WHERE categoriaId = ?',
            [id]
        );

        res.json({
            categoria: categoria[0],
            productos
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

//4. Crea un endpoint PATCH /categorias/:id que permita actualizar todos los
//datos de la categoría con el ID especificado
router.patch('/categorias/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        await db.query(
            `UPDATE categorias
             SET nombre = ?, descripcion = ?, updatedAt = NOW()
             WHERE id = ?`,
            [nombre, descripcion, id]
        );

        res.json({
            mensaje: 'Categoría actualizada'
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

//5. Crea un endpoint DELETE /categorias/:id que elimine la categoría indicada y, al mismo tiempo, elimine automáticamente 
//todos los productos que pertenecen a esa categoría.

router.delete('/categorias/:id', async (req, res) => {
    try {

        const { id } = req.params;

        await db.query(
            'DELETE FROM categorias WHERE id = ?',
            [id]
        );

        res.json({
            mensaje: 'Categoría eliminada'
        });

    } catch (error) {
        res.status(500).json(error);
    }
});