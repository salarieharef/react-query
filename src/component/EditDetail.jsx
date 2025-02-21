import React from 'react'
import { Formik } from 'formik';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import useMutationPut from '../customHook/useMutationPut';

const EditDetail = ({data , id}) => {


    const handleUpdate =async ( value) => {
        const res =await axios.put(`https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user/${id}` , value);
        // console.log(res);
        return res.data
    }; 



    const queryClient = useQueryClient()

    const {mutate , status } = useMutation(handleUpdate , {
        onSuccess:(data)=>{
            queryClient.invalidateQueries('detail')

        }, 

    })

    const handleMutate = (values)=>{
        mutate(values)
    }

    

    // const {mutate} = useMutationPut(`https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user/${id}` , 'detail')
    // const handleMutate = (values)=>{
    //     mutate(values)
    // }
    
    
    




  return (
    <div className=' mt-4'>

        <div  className='bg-[#F0F0F0] '>
            <div className='flex gap-4'>
                <h2 className='font-bold text-2xl  text-center'>   editCourse     </h2>
                <p className='mt-1 text-green-700'>(This project has an educational aspect and the placement of this part on this page is to see the immediate output.)</p>

            </div>
            <Formik
                enableReinitialize
                initialValues={{ name: data?.name , age:data?.age  , desc:data?.desc  }}
                onSubmit={handleMutate}
                >
                {({ values, handleChange, handleSubmit , handleBlur }) => {
                    return (
                    <form onSubmit={handleSubmit}>
                        <div className='flex  justify-around gap-6 mt-6'>
                            <div className='w-1/2'>
                                <input type="text" name='name' value={values.name} onChange={handleChange} placeholder="name" className="input input-bordered w-full" />
                            </div>

                            <div className='w-1/2'>
                                <input type="text" name='age' value={values.age} onChange={handleChange} placeholder="age" className="input input-bordered w-full " />
                            </div>

                            <div className='w-1/2'>
                                <input type="text" name='desc' value={values.desc} onChange={handleChange} placeholder="desc" className="input input-bordered w-full " />
                            </div>
                        </div>

                

 

                            <button type="submit" className="btn btn-blue bg-blue-600 px-4 rounded-full mx-auto ">
                                edit
                            </button>

                



                    </form>
                    );
                }}
            </Formik>
        </div>

    </div>
  )
}

export default EditDetail