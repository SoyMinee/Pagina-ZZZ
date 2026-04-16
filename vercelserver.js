const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// --- CONFIGURACIÓN PARA QUE VERCEL ENCUENTRE TODO ---
// Esto sirve index.html, los CSS, y las carpetas guiapage/userpage/media
app.use(express.static(path.join(__dirname, '/')));

// Esta ruta elimina el error "Cannot GET /"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// --- TUS RUTAS ORIGINALES (Copiadas de tu server.js) ---
const PATH_USERDATA = path.join(__dirname, 'database', 'userData.json');
const PATH_PROXIES = path.join(__dirname, 'database', 'proxiesInfo.json');
const PATH_DISCS = path.join(__dirname, 'database', 'discsinfo.json');

app.get('/api/proxies', (req, res) => {
    try {
        const data = fs.readFileSync(PATH_PROXIES, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) { res.status(500).json({ error: "Error proxies" }); }
});

app.get('/api/users', (req, res) => {
    try {
        if (!fs.existsSync(PATH_USERDATA)) return res.json([]);
        const data = fs.readFileSync(PATH_USERDATA, 'utf8');
        res.json(JSON.parse(data));
    } catch (e) { res.json([]); }
});

app.post('/api/users', (req, res) => {
    try {
        const usuarios = JSON.parse(fs.readFileSync(PATH_USERDATA, 'utf8'));
        usuarios.push(req.body);
        // Recuerda: En Vercel esto es temporal (se borra al reiniciar)
        fs.writeFileSync(PATH_USERDATA, JSON.stringify(usuarios, null, 2));
        res.send({ status: "success" });
    } catch (error) { res.status(500).send({ status: "error" }); }
});

app.get('/api/discs', (req, res) => {
    try {
        if (!fs.existsSync(PATH_DISCS)) return res.status(404).json({ error: "No discs file" });
        const data = fs.readFileSync(PATH_DISCS, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) { res.status(500).json({ error: "Error discs" }); }
});

// --- EL PUERTO DINÁMICO ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));

module.exports = app;