import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isRole='',isLoading}=useQuery({
        queryKey:[ 'isRole',user?.email,],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users-role?email=${user?.email}`)
             return res.data[0];
        }
    })
    
    return [isRole,isLoading]
};

export default useRole;