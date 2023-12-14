"use client";


import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { log } from "console";
import { FormProvider, useForm } from "react-hook-form";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";
import authApi from "@/services/auth/auth.service";
import { useState } from "react";
import { AccessDeniedError } from "@/services/common/http.errors";
import { useRouter } from "next/navigation";

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
}).required();

const LoginForm = () => {
    const router = useRouter()
    const [serverError,setServerError] = useState<string | null>(null)
    const methods = useForm<FormData>({
        resolver: yupResolver(schema),
      })
      const {register,handleSubmit,formState:{errors}} = methods
      
    const onSubmit = async(data:FormData) => {
      setServerError(null)
      try{
      const loginResponse = await authApi.login(data.username, data.password)
        console.log(JSON.stringify(loginResponse));
        router.push("/")
      }catch(e){
        if(e instanceof AccessDeniedError){
          setServerError("Tus credenciales son inválidas")
        }else{
          setServerError("Ha ocurrido un problema, intente más tarde")
        }
      }
        return false
        

    }

  return (
    <FormProvider {...methods}>
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <InputText label={"Nombre de usuario"} fieldName={"username"} placeholder="Anakin Skywalker" type="text"/>
        <InputText label={"Contraseña:"} fieldName={"password"} placeholder="contraseña" type="password" />
        <SubmitButton label={"iniciar sesión"} onSubmit={onSubmit} />
        {serverError &&
         <div>{serverError}</div>
        }
        
      </form>
    </div>
    </FormProvider>
  );
};

export default LoginForm;
