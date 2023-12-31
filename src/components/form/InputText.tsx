import { useFormContext,FieldValues } from "react-hook-form";


type  InputTextProps = {
    fieldName:string;
    label:string;
    placeholder?: string;
    type: "text" | "password"
}


const InputText = ({label,placeholder,fieldName,type}: InputTextProps) => {
    const {register,formState:{errors}} = useFormContext()

 return  <div className="flex gap-4 justify-between ">
 <label className="">{label}</label>
 <input className="text-black" {...register(fieldName)} type={type} placeholder={placeholder} />
 {errors && errors[fieldName] && <div>Este campo es incorrecto</div>}
</div>


}

export default InputText