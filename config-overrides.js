const path = require('path');

module.exports = {
    paths: function (paths, env) {        
        paths.appIndexJs = path.resolve(__dirname, 'controller/index.js');
        paths.appSrc = path.resolve(__dirname, 'controller');
        paths.appPublic = path.resolve(__dirname, 'view');
        paths.appHtml = path.resolve(__dirname, 'view/index.html');
        return paths;
    },
}