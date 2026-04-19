import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageTwo() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/page1');
    };

    return (
        <div>
            <button
                onClick={handleBack} >
                Kembali ke Halaman Satu
            </button>
        </div>
    );
}

export default PageTwo;