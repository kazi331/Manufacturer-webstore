import axios from 'axios';
import React from 'react';

const MyReviews = () => {
    axios.get('http://localhost:5000/review').then(res => console.log(res.data))
    return (
        <div>
            My reviews 
        </div>
    );
};

export default MyReviews;