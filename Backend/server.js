const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


async function fetchHomeResources() {
  try {
    const response = await axios.get('https://ddic.hgsinteractive.com/api/home-resources');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching home resources:', error.message);
    throw new Error('Failed to fetch home resources');
  }
}


app.get('/api/data',async (res,req)=>{
    try{
        console.log("Its here")
        let dataApi = await fetchHomeResources()
        res.json({
      success: true,
      data: {
        dataApi
      }
    });
    }
    catch(err){

    }
})

app.listen(5175, () => {
  console.log(`Server running on http://localhost:5175`);
});