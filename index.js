import express from 'express'
import path from 'path'
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

// Static path so stuff will work
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(process.env.PORT || 9090, () => {
	console.log('Friendly reminder, the port is: ' + (process.env.PORT || 9090) + ', not 3030 (or maybe it is. You never know 👀)');
});