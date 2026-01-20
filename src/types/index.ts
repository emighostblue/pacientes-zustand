export type Patient = {
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
}

export type PatientDraft = Omit<Patient, "id">