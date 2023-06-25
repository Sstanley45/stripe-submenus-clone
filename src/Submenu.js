import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page :{page, links} } = useGlobalContext() 
  
  const container = useRef(null)
  const [columns, setColumn] = useState('col-2')

  useEffect(() => {
    setColumn('col-2') 
    //grab the container
    const submenu = container.current 
    //destructer location
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if (links.length === 3) {
      setColumn('col-3')
    }
    if (links.length > 3) {
      setColumn('col-4')
    }
    
  },[location, links])
  
  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : 'submenu'}`} ref={container}>
      <h4>{page}</h4> 
      <div className={`submenu-center ${columns}`}> 
        {links.map((link, index) => {
          const { url, icon, label } = link
          return <a href={url} key={index}>{icon} { label}</a>
        })}
      </div>
    </aside>
  )
}

export default Submenu
