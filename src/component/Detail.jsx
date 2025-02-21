import React from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Field, Formik ,Form } from 'formik'
import axios from 'axios'
import detailPic from '../assets/images/detailPic.webp'
import EditDetail from './EditDetail'
import useQueryGet from '../customHook/useQueryGet'


const Detail = () => {
    const {id} = useParams()

    const getDetail = async ()=>{
      const result = await axios.get(`https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user/${id}`)
      return result.data
  }

  const {data , status , isFetching} = useQuery('detail' , getDetail)



  // const {data , status} = useQueryGet('detail' ,`https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user/${id}` )







  return (
    <div>
        <div className='w-[80%] flex bg-[#F0F0F0]  mx-auto mt-0'>
             <div className='w-1/2 flex flex-col gap-6 mt-10 px-6'>

                <div className='flex gap-5'>
                  <h2 className='bg-[aqua] p-3 rounded-xl'> name :</h2>
                  <h4 className='p-3'> {data && data.name}</h4>
                </div>

                <div className='flex gap-5 '>
                  <h2 className='bg-[aqua] p-3 rounded-xl'>describe :</h2>
                  <h4 className='p-3'> {data && data.age}</h4>
                </div>

                {/* <div className='flex gap-5'>
                  <h2 className='bg-[aqua] p-3 rounded-xl'>tech :</h2>
                  <h4 className='p-3'>  {data && data.tech}</h4>
                </div>        

                <div className='flex gap-5'>
                  <h2 className='bg-[aqua] p-3 rounded-xl'>cost :</h2>
                  <h4 className='p-3'> {data && data.cost}</h4>
                </div>             */}

                {data && <EditDetail data={data && data} id={id}/>}
             </div>
             <div className='w-1/2'>
                <img src={detailPic} className='' alt="" />
             </div>
        </div>

        
    </div>
  )
}

export default Detail