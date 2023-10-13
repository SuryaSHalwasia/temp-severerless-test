//domain/.netlify/basic-api
const items = require('../assets/data')
exports.handler = async(event,context) =>{
    console.log(event)
    return{
        statusCode:200,
        headers:{
            'Access-Control-Allow-Origin' : "*"
        },
        body:JSON.stringify(items)
    }
}