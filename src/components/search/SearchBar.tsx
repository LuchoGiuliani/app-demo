"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  query: string;
};

type SearchBarProps = {
  initialQuery: string;
}

const SearchBar = ({initialQuery}:SearchBarProps) => {
  const router = useRouter()
  const { register, handleSubmit,setValue } = useForm<FormData>({
    defaultValues: {
      query: initialQuery
     }
  });

  useEffect(()=>{
    setValue("query", initialQuery ?? "")
  },[initialQuery,setValue])
  
  
  const onSubmit = (data: FormData) => {
    router.push(`/?query=${data.query ?? ""}&type=hash`)
  };
  

  return (
    <>
      <div className="">
        <form className="flex justify-between pb-4 border-b" onSubmit={handleSubmit(onSubmit)}>
          <input className="rounded-sm"
            {...register("query")}
            type="text"
            placeholder={"Buscar por #Fuerza, #Jedi, Etc.."}
          />
          <button className="text-white font-bold bg-slate-600 p-2 rounded-md hover:bg-slate-500">Buscar</button>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
