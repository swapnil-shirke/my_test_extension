var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt8f9dff6a8e3d329c')
// .setHost('localhost')
// .setPort(8000)
.setHost("dev-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('blt89bb8dd35204a8dc')

var extensionSDK = app.Extension({
	secret_key     : 'blta8c9b5ed7cdcfc35',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


// e2c7844b237643927ec4e8b21bc8204780c47e60
