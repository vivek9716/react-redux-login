import React from 'react';
import { Route } from 'react-router';

import Discover from "./pages/Discover/Discover";
import Home from "./pages/Home/Home";
import Songs from "./pages/Trending/Songs";
import Register from "./pages/User/Register";
import Login from "./pages/User/Login";
import Profile from "./pages/User/Profile";
import Player from "./pages/Stream/Player";

export default (
	<section>
		<Route exact path="/" component={Home} />    
		<Route path="/discover" component={Discover}/>
		<Route path="/songs" component={Songs}/>
		<Route path="/register" component={Register}/>			
		<Route path="/login" component={Login}/>
		<Route path="/profile" component={Profile}/>
		<Route path="/player" component={Player}/>
	</section>
)