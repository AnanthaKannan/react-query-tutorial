import { useSuperHerosData } from "../hooks/useSuperHeroData"

const ButtonClick = () => {

    const onSuccess = (data) => {
        console.log('onSuccess', data)
    }   

    const onError = (err) => {
        console.log('onError data', err)
    }
    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHerosData(onSuccess, onError)

    

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
            {/* data { JSON.stringify(data)} */}
            <ul>
                {data && data.map((hero) =>{
                    return <li>{ JSON.stringify(hero)} </li>
                })}
            </ul>
        </div>
    )
}

export default ButtonClick;
