import React, {useEffect, useState} from 'react';

import {getSpaceX} from "../../services/spaceX.service/spaceX.service";
import SpaceXBuilder from "./SpaceXBuilder";

const SpaceX = () => {
   let [spaceX,setSpaceX] = useState([]);
    console.log(spaceX);
    useEffect(() =>{
        getSpaceX().then(value => setSpaceX(value.data))
    },[]);
    return (
        <div>
            {spaceX.map((value,index) => value.launch_year
                !== '2020' && <SpaceXBuilder launch={value} key={index}/>)}
        </div>
    );
};

export default SpaceX;