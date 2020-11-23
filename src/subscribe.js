const CT = require('ctvault');

const run = async() => {
    const cts = await CT.getClients()
    console.log(`products: ${cts.length}`)
}

run()