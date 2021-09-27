import React from'react'
import {Navbar} from "../components/navbar";
import {Footer} from "../components/footer";
export function NotFoundPage () {

    return(
        <div>
            <Navbar/>
            <h2>404 Not Found!</h2>
            <Footer/>
        </div>
    );
}
