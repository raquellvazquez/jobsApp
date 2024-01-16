import { useState, useEffect } from "react";
import axios from "axios";
import { mockData } from "../app/data/mockData";
// import { RAPID_API_KEY} from "@env";

// const rapidApiKey= RAPID_API_KEY;

const useFetch  = (endPoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        headers: {
          'X-RapidAPI-Key': '',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };
    
    const fetchData= async() => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
           // const response = await mockData;
            //console.log(response.data.data, "RESPONSE")

            setData(response.data.data);
          // setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
      fetchData();
    
    }, [])

    const reFecth = () => {
        setIsLoading(true);
        fetchData();
    }


    return{ data, isLoading, error, reFecth};
}

export default useFetch;