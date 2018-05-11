var Built = require('built-extension-sdk')
console.log("my app is working!")
// Initiate application
var app = Built.App('blt9a55b336dd3c7cf4')
// .setHost('localhost')
// .setPort(8000)
.setHost("dev-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('blt15ff0fcff1977cb3')

var extensionSDK = app.Extension({
	secret_key     : 'swapnil',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


// e2c7844b237643927ec4e8b21bc8204780c47e60
