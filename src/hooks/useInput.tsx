import React, { useState } from "react"

export const useInput = (initValue: string) => {
    
    const [value, setValue] = useState(initValue)

    const onChange = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return {
        value, onChange
    }
}