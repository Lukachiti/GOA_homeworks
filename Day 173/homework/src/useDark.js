import { useState } from 'react'
export function useDark() {
    const [isDark, setIsDark] = useState(false)
    function toggleDark() {
        setIsDark(!isDark)
    }
    return {
        isDark,
        toggleDark
    }
}