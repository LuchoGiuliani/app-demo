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
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("query")}
            type="text"
            placeholder={"Buscar por #Fuerza, #Jedi, Etc.."}
          />
          <button>Buscar</button>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
