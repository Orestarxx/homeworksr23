import React from 'react';

const SpaceXBuilder = ({launch}) => {
    console.log(launch);
   let {launch_year,mission_name,} =  launch;
    return (
        <div>
            <div>{launch_year}</div>
            <div>{mission_name}</div>
            <img src={launch.links.mission_patch_small} alt="launch"/>
        </div>
    );
};

export default SpaceXBuilder;