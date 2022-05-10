import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'

export default defineConfig({
        plugins: [vue()],
        test: {
            globals: true,
            environment: 'happy-dom',
            reporters: 'junit',
            outputFile: './__test__/unit-test-result.xml'
        }
    })
