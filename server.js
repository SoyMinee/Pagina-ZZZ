const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path'); // Añadido para rutas seguras
const app = express();

app.use(cors());
app.use(express.json());

// Usamos path.join para evitar problemas de carpetas en Windows
const PATH_USERDATA = path.join(__dirname, 'database', 'userData.json');
const PATH_PROXIES = path.join(__dirname, 'database', 'proxiesInfo.json');

// --- RUTA PARA LOS PROXIES ---
app.get('/api/proxies', (req, res) => {
    try {
        const data = fs.readFileSync(PATH_PROXIES, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).send({ error: "No se pudo leer proxiesInfo.json" });
    }
});

// --- RUTAS PARA USUARIOS ---
app.get('/api/users', (req, res) => {
    try {
        const data = fs.readFileSync(PATH_USERDATA, 'utf8');
        res.json(JSON.parse(data));
    } catch (e) { res.json([]); } // Si falla, devuelve array vacío
});

app.post('/api/users', (req, res) => {
    console.log("Recibiendo datos de registro:", req.body);
    try {
        const usuarios = JSON.parse(fs.readFileSync(PATH_USERDATA, 'utf8'));
        usuarios.push(req.body);
        fs.writeFileSync(PATH_USERDATA, JSON.stringify(usuarios, null, 2));
        res.send({ status: "success" });
    } catch (error) {
        res.status(500).send({ status: "error" });
    }
});

app.post('/api/users/update-avatar', (req, res) => {
    const { username, newThumb } = req.body;
    try {
        const data = fs.readFileSync(PATH_USERDATA, 'utf8');
        let usuarios = JSON.parse(data);

        // Buscamos al usuario y actualizamos su foto
        usuarios = usuarios.map(u => {
            if (u.username.toLowerCase() === username.toLowerCase()) {
                return { ...u, thumb: newThumb };
            }
            return u;
        });

        fs.writeFileSync(PATH_USERDATA, JSON.stringify(usuarios, null, 2));
        res.send({ status: "success", message: "Avatar actualizado" });
    } catch (error) {
        res.status(500).send({ status: "error", message: "Error al guardar" });
    }
});

app.post('/api/users/update', (req, res) => {
    const { username, updates } = req.body;
    const data = JSON.parse(fs.readFileSync(PATH_USERDATA, 'utf8'));

    const userIndex = data.findIndex(u => u.username.toLowerCase() === username.toLowerCase());

    if (userIndex !== -1) {
        // Mezclamos los datos viejos con los nuevos (thumb, full, color)
        data[userIndex] = { ...data[userIndex], ...updates };
        
        fs.writeFileSync(PATH_USERDATA, JSON.stringify(data, null, 2));
        return res.json({ status: "success" });
    }

    res.status(404).json({ status: "error", message: "Usuario no encontrado" });
});

// --- CONFIGURACIÓN DE DISCOS ---
// Asegúrate de que el nombre del archivo sea EXACTAMENTE el mismo que tienes en la carpeta
const PATH_DISCS = path.join(__dirname, 'database', 'discsinfo.json');

app.get('/api/discs', (req, res) => {
    try {
        if (!fs.existsSync(PATH_DISCS)) {
            console.error("ARCHIVO NO ENCONTRADO EN:", PATH_DISCS);
            return res.status(404).json({ error: "Archivo discsInfo.json no existe" });
        }
        const data = fs.readFileSync(PATH_DISCS, 'utf8');
        // Usamos JSON.parse directamente sobre la lectura limpia
        res.json(JSON.parse(data));
    } catch (error) {
        console.error("ERROR DE FORMATO O LECTURA:", error);
        res.status(500).json({ error: "Error al procesar JSON de discos" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ZZZ activo en el puerto ${PORT}`);
});

