module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*', "!border"],
            viewportUnit: 'vw',
        }
    },
}