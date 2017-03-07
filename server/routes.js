var when = require('when')

module.exports = {
	"/v1/functions/swapnil": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				swapnil: {
					"awesome": "blosum",
					"adsr": [
						"sdsdfafa",
						"abhijeet",
						"swapnil",
						"sdfsdf",
						1
					]	
				}

			})
		}
	},
	"/v1/functions/env_test_local": {
		POST: function(req, res) {
			console.log("dsfasdfds")
			var that = this
			req.builtApp = req.builtApp.persistSessionWith(Built.Session.MEMORY)
				// .setMasterKey('blt15ff0fcff1977cb3')
				.setAuthToken(req.built.getContextVar('currentUser').authtoken)

			// console.log(req.builtApp.options)
			req.logger.log("user", req.built.getContextVar('currentUser'))
				// .setPort(8000)
				// .setProtocol("http")
				// .setHost("dev-api.built.io")

			var response = {}

			return req.builtApp.Class('person').Object(req.payload.data.person)
				.save()
				.then(function(person) {
					response['person'] = person.toJSON()
					console.log("======swapnil=====")
					console.log("======shirke=====" + "hello")
					return req.builtApp.Class('address').Object(req.payload.data.address)
						.save()
				})
				.then(function(address) {
					response['address'] = address.toJSON()

					return that.resSuccess(req, res, response)
				})
				.catch(function(err) {
					console.log(err, "=========================")
					return that.resError(req, res, err)
				})
		}
	},
	"/v1/functions/env_test_stag2": {
		POST: function(req, res) {
			var that = this

			// req.logger.log("req.payload.data")

			req.builtApp = req.builtApp
				.setHost("stag-api.built.io")
				.setProtocol("https")
				// .setPort(8000)
				.setMasterKey("bltafd147ed047b1356")
				.setHeader("application_api_key", "blted7d1eef38a4a3d1")

			var response = {}

			return req.builtApp.Class('person').Object(req.payload.data.person)
				// req.logger.log(req.payload.data.person)
				.save()
				.then(function(person) {
					response['person'] = person.toJSON()
					return req.builtApp.Class('address').Object(req.payload.data.address)
						.save()
				})
				.then(function(address) {
					response['address'] = address.toJSON()
					return that.resSuccess(req, res, response)
				})
		}
	},
	"/v1/functions/env_test_stag": {
		POST: function(req, res) {
			var that = this

			// req.logger.log("req.payload.data")

			req.builtApp = req.builtApp
				.setHost("stag-api.built.io")
				.setProtocol("https")
				// .setPort(8000)
				.setMasterKey("bltafd147ed047b1356")
				.setHeader("application_api_key", "blted7d1eef38a4a3d1")

			var response = {}

			return req.builtApp.Class('person').Object(req.payload.data.person)
				// req.logger.log(req.payload.data.person)
				.save()
				.then(function(person) {
					response['person'] = person.toJSON()
					return req.builtApp.Class('address').Object(req.payload.data.address)
						.save()
				})
				.then(function(address) {
					response['address'] = address.toJSON()
					return that.resSuccess(req, res, response)
				})
		}
	},
	"/v1/functions/validError": {
		POST: function(req, res) {
			var that = this

			req.builtApp = req.builtApp
				// .setHost("localhost")
				// .setProtocol("http")
				// .setPort(8000)

				req.logger.log(req.builtApp)

			var response = {}

			return that.resError(req, res, {
				name: "================"
			})
		}
	},
	"/v1/functions/throwError": {
		POST: function(req, res) {
			var that = this
			req.builtApp = req.builtApp
				.setHost("localhost")
				.setProtocol("http")
				.setPort(8000)

			var response = {}
			console.log("reached throwError")
			throw {
				name: "is not a string"
			}
		}
	},
	"/v1/functions/chinu": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				chinu: "happy birthdayyy"
			})
		}
	},
	"/v1/functions/smita": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				smita: "is awesome"
			})
		}
	},
	"/v1/functions/altamash": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				altamash: "is aagau :D"
			})
		}
	},
	"/v1/functions/rohini": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				Rohini: "is aagau :D"
			})
		}
	},
	"/v1/functions/abhijeet": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				working: "GET call"
			})
		},
		POST: function(req, res){
			this.resSuccess(req, res, {
				working: "Post call"
			})
		},
		PUT: function(req, res){
			this.resSuccess(req, res, {
				working: "PUT call"
			})
		}
	},
	"/v1/functions/createPerson": {
		POST: function(req, res){
			req.logger.log("request payload", req.payload)
			req.logger.log("App options", req.builtApp.options)
			var that = this
			req.builtApp.Class('person').Object(req.payload.data)
			.save()
			.then(function(person){
				return that.resSuccess(req, res, person)
			})
			.catch(function(err){
				console.log(err, "=========")
			})
		}
	},
	"/v1/functions/test" : {
		POST: function(req, res){
			var that = this
			req.builtApp = req.builtApp
			
			var response = {}

			return req.builtApp.Class('person').Object(req.payload.data.person)
			.save()
			.then(function(person){
				response['person'] = person.toJSON()
				return req.builtApp.Class('address').Object(req.payload.data.address)
				.save()
			})
			.then(function(address){
				response['address'] = address.toJSON()
				return that.resSuccess(req, res, response)
			})
		}
	},
	// "/v1/functions/validError" : {
	// 	POST: function(req, res){
	// 		var that = this
	// 		return that.resError(req, res, {
	// 			name: "is not a string"
	// 		})
	// 	}
	// },
	// "/v1/functions/throwError" : {
	// 	POST: function(req, res){
	// 		var that = this
	// 		throw {
	// 			name: "is not a string"
	// 		}
	// 	}
	// },
	"/v1/classes/person/objects": {
		POST: {
			_pre: function(req, res) {
				req.bobjekt = req.bobjekt.set("age", 44)
				req.bobjekt = req.bobjekt.setReferenceWhere("address", {
					"city": "Mumbai"
				})
				return when.resolve()
			},
			_post: function(req, res) {
				req.bobjekt['new_field'] = "new_value"
				return when.resolve()
			}
		}
	},
	"/v1/classes/person/objects/:objectUid": {
		PUT:{
			_pre: function(req, res){
				req.logger.warn("warn")
				req.bobjekt = req.bobjekt.set("name", "smita")
				return when.resolve()
			},
			_post: function(req, res){
				req.bobjekt['extra_field'] = "added"
				return when.resolve()
			}
		},
		GET: {
			_post: function(req, res){
				req.bobjekt.name = "bindok_"+req.bobjekt.name
				return when.resolve()
			}
		},
		DELETE : {
			_pre: function(req, res){
				console.log("_pre")
				return when.resolve()	
			},
			_post: function(req, res){
				console.log("_post")
				var defered = utils.Promise.defer()
				setTimeout(function(){
					console.log("Timeout completed")
					defered.resolve()
				},1000)

				return defered.promise
			}
		}
	}
}
