import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollRestore() {
  const { pathname } = useLocation()

  useEffect(() => {document.body.scrollTop = 0 }, [pathname])

  window.addEventListener('keydown', function(event) { if((event.keyCode === 32 || event.which === 32) && event.target === document.body) event.preventDefault() })

  return null
}