import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import './App.css';

function App() {

  const styles_dev = {
    color:'white',fontSize:'Zrem',backgroundColor:'black'
  }

  function hello1() {
    console.log("hello 1");
  }
  const hello2 = () => {
    console.log("hello 2");
  }
  function hello3(name) {
    console.log("hello 3 " + name);
  }

  return (
    <>
      {/* <h1 className="heading">React</h1>
    <p className="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vero dolores similique sequi ea rem quas earum quidem. Itaque qui architecto cum delectus quisquam nisi temporibus quas voluptatem doloremque placeat!</p> */}
      <div id="wrapper">
        <Header />
        <Body>
          <button>Click here</button>
        </Body>
        <Body>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ad culpa sapiente iste quod labore fugit odit voluptatibus saepe praesentium mollitia suscipit, a itaque amet nobis qui odio architecto eum!</p>
        </Body>
        <Footer />
        <button onClick={hello1}>Click 1</button>
        <button onClick={hello2}>Click 2</button>
        <button onClick={() => hello3("Bhashini")}>Click 3</button>

        <p className="p1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi odio eos vel quasi, in, animi reiciendis ab id corporis itaque nihil explicabo fugiat perferendis illum veniam maiores veritatis ipsam consequuntur!
        </p>

        <p style={styles_dev}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi cum dicta nemo dolor est natus enim ex saepe blanditiis. Itaque exercitationem distinctio expedita aperiam vitae aliquid soluta qui, sapiente possimus!</p>

      </div>
    </>
  )
}

export default App
