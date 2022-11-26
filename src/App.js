import itemListContainer from "./components/itemListContainer/itemListContainer"
import  NavBar from "./components/navBar/NavBar"

function App(){

    return (
        <div>
            <NavBar />
            <itemListContainer greeting={"Buenvenidos"} />
        </div>
    )
}

export default App;