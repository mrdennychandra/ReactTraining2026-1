import React from 'react';
import Child from './Child';

function Parent(props) {
    return (
        <>
            <div className='parent-container'>
                Parent Component Props = {props.message}
            </div>
            <Child name="Denny" email="denny@example.com" />
        </>

    );
}

export default Parent;