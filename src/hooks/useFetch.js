import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error("opps somethings wrong")
                }
                const data = await res.json();
                setLoading(false)
                setData(data)
            }
            catch (err) {
                setLoading(false)
                setError("opps somethings wrong")
            }
        }

        fetchData()
    }, [url])

    return {
        data: data, isLoading, error
    }
}

export default useFetch