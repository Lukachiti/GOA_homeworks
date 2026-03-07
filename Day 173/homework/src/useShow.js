import { useState } from 'react'
export function useShow() {
    const [show, setShow] = useState(true)
    function toggleShow() {
        setShow(!show)
    }
    return {
        show,
        toggleShow
    }
}