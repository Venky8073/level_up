export const EditProfile=({id,name,email,toggle})=>{
    return(
        <div>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <button onClick={()=>toggle(id)}>User</button>
        </div>
    )
}