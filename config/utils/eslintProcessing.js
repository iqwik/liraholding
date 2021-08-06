const ESLintPlugin = require('eslint-webpack-plugin')

const enableEslint = false

const eslintProcessing = (plugins) => {
    return enableEslint ? [
        ...plugins,
        new ESLintPlugin({
            emitWarning: true,
        })
    ] : plugins
}

module.exports = eslintProcessing
