import { useState,useCallback, useEffect, useRef } from 'react'
function App() {
  const [length, setlength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [Password, setPassword] = useState('')
  // useRef to store the previous state of Password
  const passRef = useRef(null)
   const passGenerator = useCallback(() => {
    let pas=""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*()_+[]{}|;:,.<>?`~"
    for(let i=1; i<=length; i++){
      pas += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pas)
  }, [length, numberAllow, charAllow, setPassword])
  const copyToClipboard = useCallback (() =>  {
    window.navigator.clipboard.writeText(Password)
    
    passRef.current?.select() // Select the input field after copying
  }, [Password])
   {
  useEffect(() => {
    passGenerator()
  }, [length, numberAllow, charAllow, passGenerator])
  return (
    <>
    <div className='items-center justify-center h-72 bg-gray-500 rounded-md w-1/2 m-auto'>
      <div className='flex items-center justify-center py-10'>
        <input type="text"
              value={Password}
               placeholder='Password' 
                ref={passRef}
               className='h-10 w-80 rounded-sm'/>
               <button className='bg-blue-600 h-10 w-20 text-slate-300' onClick={copyToClipboard}>Copy</button>
      </div>
      <div className='flex gap-2 items-center justify-center'>
        <input type="range" 
          min={8}
          max={60}
          value={length}
          onChange={(e)=>{setlength(e.target.value)}} />
        <span className='text-slate-300'>Length:{length}</span>
        <input type='checkbox'
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={()=>{setNumberAllow((prev)=> !prev)}} />
          <label htmlFor="numberInput" className=' text-orange-500'>Number</label>
         <input type='checkbox'
            defaultChecked={charAllow}
            id='charInput'
            onChange={()=>{setCharAllow((prev)=> !prev)}} />
          <label htmlFor="numberInput" className=' text-orange-500'>Charachters</label>  
      </div>
    </div>
    </>
  )
}
}
export default App
