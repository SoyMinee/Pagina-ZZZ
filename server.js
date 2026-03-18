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

app.listen(3000, () => console.log("Servidor ZZZ activo en http://localhost:3000"));