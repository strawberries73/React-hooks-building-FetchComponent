import { data } from "jquery";
import { useState, useEffect } from "react";

export function useFetch(uri) {
    // if the data is not available yet
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [ error, setError] = useState();

    useEffect(() => {
        if (!uri) return;
        fetch(uri)
        // if we get the data
        .then((data) => data.json())
        .then(setData)
        .then(() => setLoading(false))
        // if there is an error
        .catch(setError);
    }, [uri]);
}
