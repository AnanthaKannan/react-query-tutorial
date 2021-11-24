import { useQuery } from 'react-query';
import axios from 'axios'

const fetchSuperHero = () => {
    return axios.get("http://localhost:4000/superHeros");
}

const ButtonClick = () => {

    const onSuccess = (data) => {
        console.log('onSuccess', data)
    }   

    const onError = (err) => {
        console.log('onError data', err)
    }
    const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-hero-button-click',
     fetchSuperHero, 
     {
        enabled: false,
        onSuccess: onSuccess,
        onError: onError,
        select: (data) => {
            return data.data.map((obj, i) => {
                obj.index = i;
                return obj;
            });
        }
    });

    

    if(isLoading){
        return <h1>Loading .............</h1>
    }

    if(isError){
        return <h1>Error ..............</h1>
    }

    return (
        <div>
            <hr />
            <button onClick={ refetch }>Fetch Heros</button>
            {/* data { JSON.stringify(data.data)} */}
            <ul>
                {data.map((hero) =>{
                    return <li>{ JSON.stringify(hero)} </li>
                })}
            </ul>
        </div>
    )
}

export default ButtonClick;
