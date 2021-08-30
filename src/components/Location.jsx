import React from 'react';

const Location = ({country, city}) => {
    return(
        <div className="mt-5">
            <h1 className="flex display-8 text-center text-white">
                {city}, {country}
            </h1>
        </div>
    );
}

export default Location;