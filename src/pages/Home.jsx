import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div style={{height:"100vh", padding:"20px", backgroundColor:"#232323", color:"white"}}>
            <h1 style={{fontSize:"48px", marginBottom:"20px"}}>HomePage</h1>
                <ul style={{listStyle:"none", padding:"0"}}>
                    <li style={{marginBottom:"10px"}}>
                        <Link to="/" style={{color:"#87CEFA", textDecoration:"none"}}>
                        HomePage
                        </Link>
                    </li>
                    <li style={{marginBottom:"10px"}}>
                        <Link to="/loginpage" style={{color:"#87CEFA", textDecoration:"none"}}>
                        LoginPage
                        </Link>
                    </li>
                    <li style={{marginBottom:"10px"}}>
                        <Link to="/registerpage" style={{color:"#87CEFA", textDecoration:"none"}}>
                        RegisterPage
                        </Link>
                    </li>
                    <li style={{marginBottom:"10px"}}>
                        <Link to="/communitygroup" style={{color:"#87CEFA", textDecoration:"none"}}>
                        CommunityGroup
                        </Link>
                    </li>
                    <li style={{marginBottom:"10px"}}>
                        <Link to="/mentorspage" style={{color:"#87CEFA", textDecoration:"none"}}>
                        MentorsPage
                        </Link>
                    </li>
                    <li style={{marginBottom:"10px"}}>
                        <Link to="/homepageone" style={{color:"#87CEFA", textDecoration:"none"}}>
                        HomePageOne
                        </Link>
                    </li>
                    <li style={{marginBottom:"10px"}}>
                        <Link to="/homepagetwo" style={{color:"#87CEFA", textDecoration:"none"}}>
                        HomePageTwo
                        </Link>
                    </li>
                    <li style={{marginBottom:"10px"}}>
                        <Link to="/resourcespage" style={{color:"#87CEFA", textDecoration:"none"}}>
                        ResourcesPage
                        </Link>
                    </li>
                    <li style={{marginBottom:"10px"}}>
                        <Link to="/homepagefour" style={{color:"#87CEFA", textDecoration:"none"}}>
                        HomePageFour
                        </Link>
                    </li>
                </ul>
        </div>
    );
};

export default Home;