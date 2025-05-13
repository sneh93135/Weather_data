import React from 'react'
import Child from './Component/Child';
import { useState , useCallback} from 'react';

export const Call_back = () => {

        const [count, setcount] = useState(1)

        function update() {
            setcount(count+1);
            console.log(count)
        }

        const [count1, setcount1] = useState(1)

       const calls =  useCallback(() => {
        setcount1(count+1)
          },[])

          const [lift, setlift] = useState()
            function fun(pers) {
              setlift(pers)
            }
 
            const [form, setform] = useState({
              username: "",
            })

             function manage(e) {
              setform({
                ...form,
                [e.target.name]: e.target.value
              })
            }

            const submits = (e)=>{
              e.preventDefault();
              console.log(form.username);
            }
            
  return (
   <>

    <form onSubmit={submits}>
      
      <input type="text"
      name='username'
      onChange={manage}
      value={form.username}
      placeholder='username' />
      
      <input type="submit" />
    </form>

    <h1>{count}</h1>
    <button onClick={update}>click</button>
    <button onClick={calls}>click_call</button>
    <h1>{count1}</h1>

    <Child datas={fun}/>
      <h1>{lift}</h1>

   </>
  )
}


export default Call_back