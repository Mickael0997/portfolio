const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const otherRouter = require('./routes/otherRoutes');

app.use('/', indexRouter);
app.use('/other', otherRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});