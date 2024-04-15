import { useEffect,useState } from "react"

export const AllData=()=>{
    const [data,setData]=useState([])

    async function fetchData(){
        try{
        let api=await fetch('https://jsonplaceholder.typicode.com/photos')
        let data=await api.json()
        console.log(data)
        setData(data)
        }catch(err){
        console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            <h1>All the data</h1>
            <div className="main">
                {data.map((el)=>{
                    return <div className="card">
                        <img src={el.url}></img>
                        <div className="details">{el.title}</div>
                    </div>
                })}
            </div>
        </div>
    )
}