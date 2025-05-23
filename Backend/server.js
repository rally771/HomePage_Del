const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

let bannerData = {
  "title":"Modern Innovation With A History Of Excellence",
  "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
}
let menuData = {
  "menu":[
    {title:"HOME",id:"home"},
    {title:"ABOUT US",id:"aboutUs"},
    {title:"PRODUCTS",id:"products"},
    {title:"SERVICES",id:"services"},
    {title:"RESOURCES",id:"resources"},
    {title:"CONTACT US",id:"contactus"}
  ]
}

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


app.get('/api/data',async (req,res)=>{
    try{
        console.log("Its here")
        let dataApi = await fetchHomeResources()

        res.json({
      success: true,
      data: {
        menuData,
        bannerData,
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