import React from 'react';

const NoMatch = () => {
    return (
        <div style={{textAlign:'center',marginTop:'50px'}}>
            <h4>Your Requested page not found...</h4>
            <h1 style={{color:'red'}}>404 Error!!!</h1>
            <button className="btn btn-primary mt-3 px-4"><a style={{textDecoration:'none',color:'white'}} href="/">Back to Home</a></button>
        </div>
    );
};

export default NoMatch;