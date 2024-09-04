import { GiJumpingDog } from "react-icons/gi";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

function Home(){
    return(
        <div className="px-4 py-5 text-center" >
            <h1 className="display-5 fw-bold">Bienvenido a Schnau-Zaar!</h1>
            <GiJumpingDog className="logo d-block mx-auto my-5"/>
            <h3 className="titulo lead my-5">- tu bazaar de mascotas -</h3>
            <ItemListContainer greeting="" />
        </div>
    )
}
export default Home;