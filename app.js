var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt9407dfdad47b47aa')
// .setHost('localhost')
// .setPort(8000)
.setHost("dev-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('blt45451d69ab2dcb65')

var extensionSDK = app.Extension({
	secret_key     : 'blt6fc5a562f0de9b14',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


// e2c7844b237643927ec4e8b21bc8204780c47e60