import  useSWR from 'swr'
import fetcher from '@/lib/fetcher'


const useCurrentUser = () =>{
    const {data,error,isLoading,mutate} = useSWR('/api/current',fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser
//swr is similar as react query , not gonna fetch it again if data already existed