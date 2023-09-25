import {QueryFunctionContext, useMutation, useQuery} from 'react-query'
import axios from 'axios'
import { API } from './API'
import {queryClient} from "./queryClient";

const getComments = async ({queryKey}: QueryFunctionContext<any>) => {
    const { data } = await axios.get(API.GET.comments, {
        params: {
            limit: queryKey[1],
            page: queryKey[0],
            sortBy: 'createdAt',
            order: queryKey[2]
        }
    })

    const pagesLength = 100/4;
    return {comments: data, pagesLength}
}

export const useGetComments = (page: number, perPage: number, sorting: 'asc'|'desc') => {
    return useQuery([page, perPage, sorting, 'comments'], getComments);
}


const postComment = async (payload: any) => {
    return await axios.post(API.POST.comments, payload)
}

export const useCommentsMutation = () => {
    return useMutation(postComment, {
        onSuccess: () => queryClient.refetchQueries('comments'),
    })
}