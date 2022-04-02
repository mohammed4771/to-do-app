import Todos from "./todos";
import AddNewTask from "./AddNewTask";

const Home = () => {
    return (
        <div className="home">
            <AddNewTask />
            <Todos/>
        </div>
    );
}
 
export default Home;