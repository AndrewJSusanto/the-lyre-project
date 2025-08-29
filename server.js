import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// json / form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static data from /public
app.use(express.static(path.join(__dirname, 'public')));

// root route (loading index/html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}) 

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})