import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"

function App() {

  function hello1(){
    console.log("hello 1");
  }
  const hello2 = () => {
    console.log("hello 2");
  }
  function hello3(name){
    console.log("hello 3 " + name);
  }

  return (
    <>
    {/* <h1 className="heading">React</h1>
    <p className="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vero dolores similique sequi ea rem quas earum quidem. Itaque qui architecto cum delectus quisquam nisi temporibus quas voluptatem doloremque placeat!</p> */}
    <div id="wrapper">
    <Header/>
    <Body>
      <button>Click here</button>
    </Body>
    <Body>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ad culpa sapiente iste quod labore fugit odit voluptatibus saepe praesentium mollitia suscipit, a itaque amet nobis qui odio architecto eum!</p>
    </Body>
    <Footer/>
    <button onClick={hello1}>Click 1</button>
    <button onClick={hello2}>Click 2</button>
    <button onClick={() => hello3("Bhashini")}>Click 3</button>

    </div>
    </>
  )
}

export default App
