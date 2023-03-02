import { useQuery } from 'react-query';
import axios from 'axios'

const fetchSuperHero = () => {
    return axios.get("http://localhost:4000/superHeros");
}

const RQsuperHero = () => {

    const { isLoading, data, isError, error, isFetching } = useQuery('super-hero', fetchSuperHero, {
        cacheTime: 5000, // 5ms
    });

    

    if(isLoading){
        return <h1>Loading ..............</h1>
    }

    if(isError){
        return <h1>Error ..............</h1>
    }

    return (
        <div>eeeeeeeeeee
            {/* data { JSON.stringify(data.data)} */}
            <ul>
                {data?.data.map((hero) =>{
                    return <li>{ JSON.stringify(hero)} </li>
                })}
            </ul>
        </div>
    )
}

export default RQsuperHero
