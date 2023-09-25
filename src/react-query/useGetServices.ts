import { useQuery } from 'react-query'
import axios from 'axios'
import { API } from './API'

const getServices = async () => {
    const { data } = await axios.get(API.GET.services)

    return data
}

export const useGetServices = () => {
    return useQuery(['services'], getServices);
}
