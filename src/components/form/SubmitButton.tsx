import {FieldValues, useFormContext} from "react-hook-form"

type  SubmitButtonProps<T> = {
    onSubmit: (data: T) => void;
    label:string;
}


const SubmitButton = <T extends FieldValues,> ({onSubmit,label}:SubmitButtonProps<T>) => {

    const {handleSubmit} = useFormContext<T>()

    return <div>
        <button onClick={handleSubmit(onSubmit)}>{label}</button>
    </div>
}

export default SubmitButton