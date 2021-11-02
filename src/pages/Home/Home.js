import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <div className="content-wrapper">
                <div className="menu">
                    <main><br/>
                        <h1>Portal <span>Brasil</span> Covid</h1>
                        <p>Confira dados sobre o novo <span>coronavírus</span>.</p><br/>
                    </main><br/>
                    <Link to='/Form' className='enter-app' >
                            Pesquisar dados por Estado
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;