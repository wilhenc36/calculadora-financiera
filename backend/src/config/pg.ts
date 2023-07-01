export default (value: any) => {
    const envs: { [key: string]: any } = {
        local: {
            user: process.env.DB_USER || '',
            host: process.env.DB_HOST || '',
            database: process.env.DB_DATABASE || '',
            password: process.env.DB_PASSWORD || '',
            port: parseInt(process.env.DB_PORT || '5432'),
        },
        development: {
            user: process.env.DB_USER || '',
            host: process.env.DB_HOST || '',
            database: process.env.DATABASE || '',
            password: process.env.PASSWORD || '',
            port: parseInt(process.env.DB_PORT || '5432'),
        }
    }

    return envs[value]
}