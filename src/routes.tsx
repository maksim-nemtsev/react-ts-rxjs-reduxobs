import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import RxJs from "./pages/rxjs";

export const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/rxjs" element={<RxJs />} />
  </Routes>
);
{/* <NavLink to='/home'>
Home
</NavLink>
<NavLink to='/events'>
Events
</NavLink>
<NavLink to='/annual'>
Annual Report
</NavLink>
<NavLink to='/team'>
Teams
</NavLink>
<NavLink to='/blogs'>
Blogs
</NavLink>
<NavLink to='/sign-up'> */}