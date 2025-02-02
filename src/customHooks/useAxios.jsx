import { useCallback, useEffect, useState } from "react"


const useAxios = (url, method = "GET", options = {}, autoFetch = true) => {

    const [loading, setLoading] = useState()
    const [data, setData] = useState()
    const [error, setError] = useState()

    const fetchData = useCallback(
        async (requestData = null) => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios({
                    url,
                    method,
                    ...options,
                    data: requestData
                });
                setData(response.data);
                return response.data;
            } catch (error) {
                setError(error)
                return null;
            } finally {
                setLoading(false)
            }
        }
    )
    [url, method, options]

    useEffect(() => {
        if (autoFetch) {
            fetchData()
        }
    }, [fetchData, autoFetch])
    return { data, loading, error, refetch: fetchData }
}

export default useAxios