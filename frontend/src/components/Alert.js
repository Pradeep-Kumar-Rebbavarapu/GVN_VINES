import React from 'react'
import { useContext } from 'react'
import Context from '../Context/Context'

export default function Alert() {
  let { alert, setalert } = useContext(Context)

  return (
    <div id="alert" class={`${alert.hidden} container absolute ml-4 `}>
      
      <div class="arrow">
        <div class="outer "></div>
        <div class="inner "></div>
      </div>
      <div class={`message-body bg-opacity-90 text-white 
    ${alert.className} w-[400px]  flex`}>
      
        <div >
          <p class="mx-2">{alert.message}</p>

        </div>
        
      </div>
      
    </div>
  )
}
