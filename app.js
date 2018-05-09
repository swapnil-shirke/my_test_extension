var Built = require('built-extension-sdk')
console.log("my app is working!")
// Initiate application
var app = Built.App('blt81ca23eaa3e8d585')
// .setHost('localhost')
// .setPort(8000)
.setHost("stag-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('bltf41b9fc24eab55f4')

var extensionSDK = app.Extension({
	secret_key     : 'swapnil',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


// e2c7844b237643927ec4e8b21bc8204780c47e60
