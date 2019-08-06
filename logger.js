const { createLogger, format, transports } = require('winston')

let logger = createLogger({
    transports: [
        new transports.Console()
    ]
})

module.exports = logger