export const apidata = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bc145f787cmshc6be479a09555b2p112f75jsn222924337038",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchdata = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
