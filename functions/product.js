const Airtable = require('airtable-node')
require('dotenv').config()
const airtable = new Airtable({apiKey:process.env.AIRTABLE_API_KEY})
.base('appWHHC6IaPOMVxrV').table('products')

//domain/.netlify/hello
exports.handler = async(event,context) =>{
    const {id} = event.queryStringParameters
    if(id){
        try {
            const product = await airtable.retrieve(id)
            if(product.error)
            {
                return{
                    statusCode:404,
                    body:`No resource with id ${id}`
                }
            }
            return{
                statusCode:200,
                body:JSON.stringify(product)
            }    
        } catch (error) {
            return{
                statusCode:500,
                body:`Unknown gateway error`
            }
        }
            
    }
    return{
        statusCode:400,
        body:"Please provide product id"
    }
    
}