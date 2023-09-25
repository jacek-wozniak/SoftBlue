import { useQuery } from 'react-query'
import axios from 'axios'
import { API } from './API'

const getExperience = async () => {
    const { data } = await axios.get(API.GET.experience)

    return data
}

export const useGetExperience = () => {
    return useQuery(['experience'], getExperience);
}
