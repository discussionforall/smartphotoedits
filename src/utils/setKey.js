import axios from "axios";
import {commonConfig} from '../commonConfig/config'
const publicIp = require('public-ip')

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

const setKey = (location,utm_term_name,Page_keyword) => {
    let countryName;
    let dataKey = ''; 
    let locationKey = '';

    const checkCountry = commonConfig.COUNTRY_LIST
    
    let  ip;
    let params = new URLSearchParams(location.search);
    let utm_term_value = params.get('utm_term');
    let config
    let data
    return new Promise(function(resolve) {
    (async () => {
        ip = await publicIp.v4();
        
        data = [{ "query": ip,   "fields": "country"}];

        config = {
            method: 'post',
            url: `${commonConfig.CORS_URL}http://ip-api.com/batch`,
            headers: { 
            'Content-Type': 'application/javascript'
            },
            data : data
        };

        const response = await axios(config);
        countryName = response.data[0].country;
        if(!checkCountry.includes(countryName)){
            countryName = 'United States'
        }
        localStorage.setItem("location",countryName);

        locationKey = localStorage.getItem("location") !==null?localStorage.getItem("location"):'United States';
        if(location.search !==''&&parseQuery(location.search).utm_term){
            
            if(localStorage.getItem(utm_term_name)!==''){
                localStorage.setItem(utm_term_name,utm_term_value);
            
            }else{
                localStorage.setItem(utm_term_name,Page_keyword);
                
            }
        }
        dataKey = location.search !==''? 
        localStorage.getItem(utm_term_name)  !==null? localStorage.getItem(utm_term_name):utm_term_value
        :localStorage.getItem(utm_term_name)!==null?localStorage.getItem(utm_term_name):Page_keyword;
        
        resolve([dataKey,locationKey]);
        })();    
    });
};

export default setKey;
