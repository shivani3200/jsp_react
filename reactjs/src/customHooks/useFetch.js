import { useState , useEffect} from "react";

const useFetch=(url)=>{

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchApi = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();
          setData(data);
          console.log(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchApi();
      }, []);

      return [data, loading, error];
}

export default useFetch;