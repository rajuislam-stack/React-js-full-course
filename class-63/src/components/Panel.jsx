import { useState } from "react"

export default function Panel({title, children, isActive, onShow}) {
  
  return (
    <div>
      <section>
        <h2>{title}</h2>
        {isActive ? (
          <p>{children}</p>
        ):(<>
         <button onClick={onShow}>
            Show
          </button>
        </>)}
      </section>
    </div>
  )
}
