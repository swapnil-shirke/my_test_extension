var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt9e750c9042a275')
// .setHost('localhost')
// .setPort(8000)
.setHost("stag-api.built.io")
.setProtocol("https")
// .setPort(80)
.setMasterKey('blt00e5c52836f7ec')

var extensionSDK = app.Extension({
	secret_key     : 'mojojogo',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


// e2c7844b237643927ec4e8b21bc8204780c47e60
