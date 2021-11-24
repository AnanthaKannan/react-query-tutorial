import { useQuery } from 'react-query';
import axios from 'axios'

const fetchSuperHeros = () => {
    return axios.get("http://localhost:4000/superHeros");
}


export const useSuperHerosData = (onSuccess, onError) => {
    return useQuery('super-hero-button-click',
     fetchSuperHeros, 
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
}

const fetchSuperHero = ({queryKey}) => {
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superHeros/${heroId}`);
}

export const useSuperHeroData = (heroId, onSuccess, onError) => {
    return useQuery(['super-hero-button-click', heroId],
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
}

