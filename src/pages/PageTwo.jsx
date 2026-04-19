import { Button } from 'primereact/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageTwo() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/page1');
    };

    return (
        <div>
           <Button 
        label="Kembali ke Halaman Satu" 
        icon="pi pi-arrow-left" 
        className="p-button-secondary"
        onClick={handleBack} 
      />
        </div>
    );
}

export default PageTwo;