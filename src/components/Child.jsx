import React from 'react';

function Child({name,email}) {
    return (
        <div className='box'>
            Hello {name ? name : 'Guest'}!. Your email is {email}
        </div>
    );
}

export default Child;