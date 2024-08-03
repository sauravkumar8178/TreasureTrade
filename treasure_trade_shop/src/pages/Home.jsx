import React from "react";
import NavBar from "../components/common/NavBar"
import Footer from "../components/common/Footer"
            

const Home = () =>{
    return(
        <>
            <div className="navbar">
                <NavBar />
            </div>

            <Switch>

            </Switch>

            <div className="footer">
                <Footer />
            </div>
        </>
    );
}