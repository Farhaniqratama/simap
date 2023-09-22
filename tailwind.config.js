module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        colors: {
            primary: '#33D1FF',
            orang: '#33D1FF',
            reb: '#33D1FF'
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
