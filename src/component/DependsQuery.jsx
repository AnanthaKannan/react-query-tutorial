import { useQuery } from 'react-query';
import axios from 'axios'

const fetUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`);
}

const fetchCourseByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`);
}

const DependsQuery = ({ email }) => {

    const { data: user} = useQuery(['user', email], ()=> fetUserByEmail(email));
    const channelId = user?.data.channelId;

    useQuery(['course', channelId], ()=> fetchCourseByChannelId(channelId), {
        enabled: !!channelId
    })

    return (
        <div>
            DecencyQuery
        </div>
    )
}

export default DependsQuery
