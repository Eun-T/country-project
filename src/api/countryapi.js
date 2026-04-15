export const getCountry = async () => {
    const result = await axios.get("https://restcountries.com/v3.1/all?limit=10")
    return result
}