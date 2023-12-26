import {FieldValues, useFormContext} from "react-hook-form"

type  SubmitButtonProps<T> = {
    onSubmit: (data: T) => void;
    label:string;
}


const SubmitButton = <T extends FieldValues,> ({onSubmit,label}:SubmitButtonProps<T>) => {

    const {handleSubmit} = useFormContext<T>()

    return <div className="bg-slate-200 text-yellow-500  mx-14 flex  items-center justify-center rounded-sm">
        <button className="hover:text-black" onClick={handleSubmit(onSubmit)}>{label}</button>
    </div>
}

export default SubmitButton