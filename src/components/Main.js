const data = ["Rose", "Lily 23434 ", "Sunflower", "Tulip"]

function Main()
{
  return(
    <div>
      {
        data.map((element, index)=>{
            return(<h2 key={index}>{element}</h2>)
        })
      }
    </div>
  )
}

export default Main;