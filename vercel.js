const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path'); 
const app = express();

app.use(cors());
app.use(express.json());

// --- ESTO ES LO NUEVO: PARA QUE VERCEL ENCUENTRE TU INDEX.HTML ---
// Sirve tus archivos (CSS, Imágenes, JS)
app.use(express.static(path.join(__dirname, '/')));

// Envía el index.html cuando alguien entra a la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// -------------------------------------------------------------

const PATH_USERDATA = path.join(__dirname, 'database', 'userData.json');
const PATH_PROXIES = path.join(__dirname, 'database', 'proxiesInfo.json');

// --- TUS RUTAS (SIN TOCAR NI UNA COMA) ---
app.get('/api/proxies', (req, res) => {
    try {
        const data = fs.readFileSync(PATH_PROXIES, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).send({ error: "No se pudo leer proxiesInfo.json" });
    }
});

app.get('/api/users', (req, res) => {
    try {
        const data = fs.readFileSync(PATH_USERDATA, 'utf8');
        res.json(JSON.parse(data));
    } catch (e) { res.json([]); } 
});

app.post('/api/users', (req, res) => {
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
        data[userIndex] = { ...data[userIndex], ...updates };
        fs.writeFileSync(PATH_USERDATA, JSON.stringify(data, null, 2));
        return res.json({ status: "success" });
    }
    res.status(404).json({ status: "error", message: "Usuario no encontrado" });
});

const PATH_DISCS = path.join(__dirname, 'database', 'discsinfo.json');

app.get('/api/discs', (req, res) => {
    try {
        if (!fs.existsSync(PATH_DISCS)) {
            return res.status(404).json({ error: "Archivo discsinfo.json no existe" });
        }
        const data = fs.readFileSync(PATH_DISCS, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: "Error al procesar JSON de discos" });
    }
});

// --- CAMBIO PARA EL PUERTO (PARA QUE FUNCIONE EN LOCAL Y EN VERCEL) ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));

// IMPORTANTE PARA VERCEL
module.exports = app;