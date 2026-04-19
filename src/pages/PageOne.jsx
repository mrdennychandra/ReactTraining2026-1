import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

function PageOne() {
    return (
        <div>
            <Link to="/page2">
                <Button label="Pergi ke Halaman Dua" icon="pi pi-arrow-right" />
            </Link>
        </div>
    );
}

export default PageOne;