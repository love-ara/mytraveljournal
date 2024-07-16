import Navbar  from "./Navbar";
import data from "../data";
import Hero from "./Hero";
function Home(){

    const destination = data.map(item =>{
        return (<Hero
            key={item.id}
            {...item}
        />)
    })


    return (
        <div>
            <Navbar/>
            {destination}
        </div>
    )
}

export default Home;