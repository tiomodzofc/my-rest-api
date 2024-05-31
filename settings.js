const fs = require('fs')

global.creator = 'Tio Modz'// yourname
global.MONGO_DB_URI = "mongodb+srv://Saycat:oyNcxxphdoLDpqWA@data-say.n77nxub.mongodb.net/?retryWrites=true&w=majority&appName=Data-say" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10" //isi apa aja bebas
global.your_email = "saycatbot@gmail.com" //email
global.email_password = "hacksteam12" //application password email
global.limitCount = 5
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Cade a apikey?',
        creator: `${creator}`,
        result: "erro"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
