import React, {useState, useEffect} from 'react';
import axios from "axios";

const Hooks = () => {
    const [number, setNumber] = useState(0);
    const [posts, setPosts] = useState([]);
    //arrayni destruktizatsiya qilish
    console.log(number);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            setPosts(res.data);
        })
    }, [])

    const incrementNumber = () => {
        setNumber(number + 1);

    }
    const decrementNUmber = () => {
        setNumber(number - 1);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mt-3  offset-4">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">{number}</h1>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button type="button" className="btn btn-success" onClick={incrementNumber}>+</button>
                            <button type="button" className="btn btn-danger">-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {posts.map((item, index) => {
                    return (
                        <div className="col-4 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h4>{item.title}</h4>
                                </div>
                                <div className="card-body">
                                    {item.body}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Hooks;