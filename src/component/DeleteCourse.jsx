import axios from 'axios';
import React from 'react'
import { useQuery , useMutation, useQueryClient } from 'react-query'
import useMutationDelete from '../customHook/useMutationDelete';


const DeleteCourse = ({id}) => {
//   const queryClient = useQueryClient()


//   const handleDel =async (id ) =>{
//     const res =await axios.delete(`https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user/${id}`);
//     return res.data

// }

// const {mutate} = useMutation(handleDel,{
//   onSuccess: () => {
//     queryClient.invalidateQueries('list');

//   }
// })


// const handleMutate = (id) =>{
//   mutate(id)
// }


  
  const {mutate} = useMutationDelete('list')
const handleMutate = (id) =>{
  mutate(`https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user/${id}`)
}



  return (
    <button onClick={()=>handleMutate(id)}  className=' block bg-[red] border-zgh border rounded-xl mx-auto xl:mr-18  py-1 px-4'> 
        delete
    </button>

  )
}

export default DeleteCourse