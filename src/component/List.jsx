import axios from "axios";
import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import AddCard from "./AddCard";
import CourseCard from "./CourseCard";
import useQueryGet from "../customHook/useQueryGet";

const List = () => {
  const getList = async () => {
    const result = await axios.get(
      "https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user"
    );
    return result.data;
  };

  const { data, status } = useQuery("list", getList , {
    onSuccess :data =>{
      console.log(data)
    },
    onError : err =>{
      console.log(err)
    }
  });

  // const { data, status } = useQuery({
  //   queryKey:'list',
  //   queryFn: getList
  // });

  // const {data , status} = useQueryGet('list' ,"https://673ef547a9bc276ec4b66ea0.mockapi.io/users/user" )


  return (
    <div>
      <AddCard />
      {status === "loading" && (
        <h1 className="mt-10 text-center font-extrabold text-2xl">loading</h1>
      )}

      {status === "success" && (
        <div className="mt-10 text-center ">
          <h1 className="font-extrabold text-2xl">Courses list</h1>
          <p className="w-fit shadow-2xl mx-auto bg-gray-200">
            get data with useQuery
          </p>
        </div>
      )}

      <div className="flex flex-wrap justify-between gap-5 w-[90%] mx-auto mt-5">
        {data &&
          data.map((item, index) => {
            return <CourseCard key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default List;
