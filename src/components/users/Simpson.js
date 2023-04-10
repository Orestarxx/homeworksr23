import React from 'react';

const Simpson = ({item:simpsons}) => {
    let {name,age,photo,surname} = simpsons;
    return (
        <div>
          <div>{`${name} ${surname} - ${age}`}</div>
            <img src={photo} alt="simpsons"/>

        </div>
    );
};

export default Simpson;