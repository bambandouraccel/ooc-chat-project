
const express = require('express');
const cors = require('cors');

const app = express();

// Configuration de CORS
app.use(cors({
    origin: 'https://ooc-frontend-clover-chat.apps.origins.heritage.africa',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
    credentials: true, // Pour autoriser les cookies et en-têtes d'autorisation
}));
