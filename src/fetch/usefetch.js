import { useState, useEffect } from "react";

export default function useFetch(fetchParams) {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Constructing the URL
        let urlApi = "https://fakestoreapi.com/products";
        if (fetchParams.endPoints) {
            urlApi += fetchParams.endPoints;
        }
        if (fetchParams.queryParams) { // Corrected typo in queryParams
            urlApi += fetchParams.queryParams;
        }

        // Constructing fetch options
        const fetchOption = {
            method: fetchParams.method ? fetchParams.method : "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };
        if (fetchParams.dataBody) { // Corrected typo in dataBody
            fetchOption.body = JSON.stringify(fetchParams.dataBody);
        }

        // Making the API request
        fetch(urlApi, fetchOption)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(jsonData => {
                setData(jsonData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, -[]); // Added dependency array to useEffect

    return data;
}
