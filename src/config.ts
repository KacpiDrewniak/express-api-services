import packageJson from '../package.json';

export const API_KEY = 'https://hotelspot.slack.com/archives/D061JBRMP28/p1707784526524179'
export const config = {
    version: packageJson.version,
    name: packageJson.name,
    description: packageJson.description,

    nodeEnv: process.env['NODE_ENV'] ?? 'development',
    port: process.env['PORT'] ?? 3000,

    clientCorsOrigins: {
        'test': process.env['DEV_ORIGIN'] ?? '*',
        'development': process.env['DEV_ORIGIN'] ?? '*',
        'production': process.env['PROD_ORIGIN'] ?? 'none'
    }
}

