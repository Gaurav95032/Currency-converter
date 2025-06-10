import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!currency) return

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency])
                console.log(data)
                setError(null)
            })
            .catch((error) => {
                console.error("Failed to fetch currency info:", error)
                setError("Unable to fetch currency data")
                setData({})
            })
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo
