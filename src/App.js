// App.js
import Fruit from './component/Fruit'
import Car from './component/car'
function App() {

    const fruits =
    [
       { name: "Mango",
        color: "Yellow"},
        {
          name: "banana",
        color: "Yellow"
        }
    ]

    return (
        <div className="App" style={{justifyContent:'center'}} >
            <Fruit fruits={fruits} />
            <hr></hr>
            <Car/>
        </div>
    );
}

export default App;