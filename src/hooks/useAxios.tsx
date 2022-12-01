import axios from 'axios';
import { useState, useEffect } from 'react';

axios.defaults.baseURL = 'http://ec2-3-113-19-2.ap-northeast-1.compute.amazonaws.com';
type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";


const useAxios = ({ url, method, body = null, headers = null, params, lng}: {url: string, method: Methods, body?: any, headers?: any, params?: any, lng?: any}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res: any) => {
                setResponse(res.data);
            })
            .catch((err: any) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers, params, lng]);

    return [ response, error, loading ];
};

export default useAxios;