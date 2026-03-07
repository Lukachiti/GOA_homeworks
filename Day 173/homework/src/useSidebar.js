import { useState } from 'react'
export function useSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    function toggleSidebar() {
        setIsOpen(!isOpen)
    }
    return {
        isOpen,
        toggleSidebar
    }
}