const key = 'gMNhK5SsAIlM0zQGggCfMKPz1lDv7VZF';

// get waether informations

const getWeather = async (keyCity) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${keyCity}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};


// get city informations
const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response =  await fetch(base + query);
    const data = await response.json();

    return data[0];
}



