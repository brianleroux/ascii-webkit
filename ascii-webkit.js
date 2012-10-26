var pictureTube = require('picture-tube')
,   fs = require('fs')
,   path = require('path')

module.exports = function(url) {
    require('phantom').create(function(phantom) {
        phantom.createPage(function(page) {
            page.open(url, function () {
                var imgName = path.join(__dirname, '1.png') 
                page.render(imgName, function(){
                    var img = fs.createReadStream(imgName)
                    img.pipe(pictureTube()).pipe(process.stdout)
                    phantom.exit()
                })
            })
        })
    })
}
