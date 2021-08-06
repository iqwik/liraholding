module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                corejs: {
                    version: '3',
                    proposals: true,
                },
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-syntax-dynamic-import',
    ],
}
