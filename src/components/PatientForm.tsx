import { useForm, type SubmitHandler } from "react-hook-form"
import Error from "./Error"
import type {PatientDraft} from "../types/index"

export default function PatientForm() {
    const { register, handleSubmit, formState: {errors} } = useForm<PatientDraft>()




    const onSubmit: SubmitHandler<PatientDraft> = (data) => console.log(data)


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register("name", { 
                            required: "El nombre del paciente es obligatorio." ,
                            maxLength: {
                                value: 8,
                                message: "El máximo numero de caracteres es de 8."
                            },
                            minLength: {
                                value: 2,
                                message: "El minímo numero de caracteres es de 2."
                            },
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "El nombre solo debe tener letras."
                            }
                        })}
                    />
                    {errors.name && (
                        <Error>
                            {errors.name.message?.toString()}
                        </Error>
                    )}
                   
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register("caretaker", {
                            required: "El nombre del propiertario es obligatorio",
                            maxLength: {
                                value: 8,
                                message: "El máximo número de caracteres es 8"
                            },
                            minLength: {
                                value: 2,
                                message: "El número minímo de caracteres es 2"
                            },
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: "El nombre del propietario solo debe tener letras."
                            }
                        })}
                    />
                    {errors.caretaker && 
                        <Error>
                            {errors.caretaker.message?.toString()}
                        </Error>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Email de Registro"
                        {...register("email", {
                            required: "El email es obligatorio.",
                            pattern: {
                                value: /^[a-zA-Z0-9._]+@[a-zA-Z]+\.(com|es|net)$/,
                                message: "El email debe ser válido."
                            }
                        })}
                    />
                    {errors.email && (
                        <Error>
                            {errors.email.message?.toString()}
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register("date", {
                            required: "La fecha es obligatoria"
                        })}
                    />
                    {errors.date && (
                        <Error>
                            {errors.date.message?.toString()}
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Síntomas del paciente"
                        {...register("symptoms", {
                            required: "Los sintomas son obligatorios."
                        })}
                    ></textarea>
                    {errors.symptoms && (
                        <Error>
                            {errors.symptoms.message?.toString()}
                        </Error>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Guardar Paciente'
                />
            </form>
        </div>
    )
}