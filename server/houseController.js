module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },

    createHouse: (req, res) => {
        houses.push(req.body);
        res.status(200).send(houses);
    },

    updateHouse: (req, res) => {
        const {id} = req.body;
        const {[ property_name, address, city, state, zip ]} = req.params.id
        houses[id].req.params.id = req.params.id;
        res.status(200).send(houses);
    },

    deleteHouse: (req, res) => {
        const {id} = req.params;
        houses.splice(id, 1)
        res.status(200).send(houses);
    }
}