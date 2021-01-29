db.createUser({
		user: "admin",
		pwd: "admin",
		roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]

})

db.createUser({
	user: 'mongo_user',
	pwd: 'mongo_pass',
	roles: [
		{
			role: "readWrite",
			db: "mongo_db"
		}
	]
})