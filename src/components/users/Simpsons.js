
import {simpsons} from "../../data/simpsons.data";
import Simpson from "./Simpson";

const Simpsons = () => {
    console.log(simpsons)
    return (
        <div>

            {simpsons.map((value,index) =><Simpson item={value} key={index}/>)}
        </div>
    );
};

export default Simpsons;