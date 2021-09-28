import React from 'react'
import Spinner from '/src/spinner.svg';

const LoadingSpinner = () => {
    return (
        <div className="Spinner">
            <img src={Spinner} />
        </div>
    );
}

export default LoadingSpinner;