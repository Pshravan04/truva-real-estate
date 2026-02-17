
import { defineConfig } from '@prisma/config'

export default defineConfig({
    earlyAccess: true,
    schema: {
        kind: 'multi',
        folder: 'prisma/schema',
    },
    datasources: [
        {
            provider: "mysql",
            url: process.env.DATABASE_URL
        }
    ]
})
