var webpack = require('webpack');
module.exports = {
    entry: [
        './app/app.module.ts', // This is pretty much the only line you need in this array.  It gives webpack the entry point for when it's doing it's tree shaking
        './app/core/core.module.ts', // This is pretty much the only line you need in this array.  It gives webpack the entry point for when it's doing it's tree shaking
        './app/app.config.ts',
        './app/app.animations.ts',
        './app/core/checkmark/checkmark.filter.ts',
        './app/core/phone/phone.module.ts',
        './app/core/phone/phone.service.ts',
        './app/phone-list/phone-list.module.ts',
        './app/phone-list/phone-list.component.ts',
        './app/phone-detail/phone-detail.module.ts',
        './app/phone-detail/phone-detail.component.ts'
    ],
    module: {
        rules: [
            {
                test: /\.ts$/, // Looks for *.ts and *.tsx files, a general regular expression
                exclude: /node_modules/, // Don't look in here for compilation, this gets brought in with the imports in the actual project
                loader: "ts-loader" // One of a handful of loaders, but this one works pretty well
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'] // These are the extensions we care about in the project
    },
    output: { // This whole section is for where we output the compiled code
        path: __dirname + '/dist',
        publicPath: '',
        filename: 'bundle.js'
    }
};