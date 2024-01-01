const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/forward-webhook', async (req, res) => {
    try {
        const response = await axios.post('webhook removed', req.body);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.toString());
    }
});

const PORT = process.env.PORT || 2999;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
