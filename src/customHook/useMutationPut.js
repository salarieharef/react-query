import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';


const useMutationPut = (url , key) => {
    const queryClient = useQueryClient();

    const handlePut = async ( values) => {
        const res = await axios.put(url, values);
        return res.data;
    };

    

    return useMutation(handlePut, {
        onSuccess: () => {
            queryClient.invalidateQueries(key);
        },
    });

    
};

export default useMutationPut;