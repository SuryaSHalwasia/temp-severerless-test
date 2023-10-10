//domain/.netlify/basic-api
const items = require('../assets/data')
exports.handler = async(event,context) =>{
    console.log(event)
    return{
        statusCode:200,
        body:JSON.stringify(items)
    }
}