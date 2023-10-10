//domain/.netlify/hello
exports.handler = async(event,context) =>{
    console.log(event)
    return{
        statusCode:200,
        body:'HELLO WORLDs'
    }
}