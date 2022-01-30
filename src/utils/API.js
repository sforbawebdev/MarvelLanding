class API {
    constructor({ base }) { 
        this.base = base;
        this.public_key = `41e234fae60e5c2b459e399aa453babd`;
        this.private_key = `21fdbfdcb4408a3d8f75d2b6d464cae06f1f8116`; 
    }
    async get(endpoint, params = {}) {

        return await fetch(`${this.base}${endpoint}?apikey=${this.public_key}`, { params })
                .then(function(resp) { return resp.json() })
                .catch(error => {return error});
    }
    
}

export default API;
