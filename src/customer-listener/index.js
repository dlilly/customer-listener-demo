let updated = ({ message, resource }) => {
    console.log(`\nCustomer Updated`)
    console.log(`----------------\n`)
    console.log(`Message: ${JSON.stringify(message, '', 4)}\n`)
    console.log(`Customer: ${JSON.stringify(resource, '', 4)}`)
}

module.exports = {
    subscriptions: [{
        key: 'customer-listener',
        changes: {
            customer: {
                ResourceCreated: updated,
                ResourceUpdated: updated
            }
        }
    }]
}