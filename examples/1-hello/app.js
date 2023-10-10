const result = document.querySelector('.result')

const fetchData = async() =>{
    try {
        const {data} = await axios.get('/api/hello')
        result.textContent=data
        console.log(data)
    } catch (error) {
        console.log(error.response.data)
        result.textContent = error.response.data
    }
}

fetchData()