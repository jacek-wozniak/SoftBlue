import {QueryFunctionContext, useMutation, useQuery} from 'react-query'
import axios from 'axios'
import { API } from './API'
import {queryClient} from "./queryClient";

const getComments = async ({queryKey}: QueryFunctionContext<any>) => {
    // to zapytanie jest oczywiście nadmiarowe, natomiast API nie zwraca informacji ile jest wszystkich komentarzy - normalnie bym raczej
    // wyciągnął i zwrócił wszystkie komentarze i zrobił paginację po stronie Reacta, ale w zadaniu było określone, że paginacja ma działać z wykorzystaniem API
    const { data: fullData } = await axios.get(API.GET.comments);

    const { data } = await axios.get(API.GET.comments, {
        params: {
            limit: queryKey[1],
            page: queryKey[0],
            sortBy: 'id',
            order: queryKey[2]
        }
    })

    const pagesLength = Math.ceil(fullData.length/queryKey[1]);
    return {comments: data, pagesLength}
}

export const useGetComments = (page: number, perPage: number, sorting: 'asc'|'desc') => {
    return useQuery([page, perPage, sorting, 'comments'], getComments);
}


const postComment = async (payload: any) => {
    return await axios.post(API.POST.comments, payload);
}

export const useCommentsMutation = () => {
    return useMutation(postComment, {
        onSuccess: () => {
            return queryClient.invalidateQueries(['comments'])
        },
    })
}