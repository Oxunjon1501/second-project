import React from 'react';

const Hooks = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mt-3  offset-4" >
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">0</h1>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button type="button" className="btn btn-success">+</button>
                            <button type="button" className="btn btn-danger">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hooks;