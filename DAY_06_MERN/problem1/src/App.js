import { useEffect, useState } from 'react';
import './App.css';
import { UserProfile } from './components/userProfile';
import { EditProfile } from './components/editProfile';

let users=[
  {id:1,name:"abc",email:'abc@gmail.com',status:true},
  {id:2,name:"sam",email:'sam@gmail.com',status:false},
  {id:3,name:"ram",email:'ram@gmail.com',status:true},
  {id:4,name:"vinay",email:'vinay@gmail.com',status:false},
]

function App() {
  const [data,setData]=useState(users)

  function toggle(id){
    setData((prev)=>{
      return prev.map((el)=>{
        if(el.id==id){
          return{...el,status:!el.status}
        }else{
          return{...el}
        }
      })
    })
  }

  useEffect(()=>{

  },[data])
  return (
    <div className="App">
      {data.map((el)=>el.status?<UserProfile {...el} toggle={toggle}/>:<EditProfile {...el} toggle={toggle}/>)}
    </div>
  );
}

export default App;
