import Get from './src/Login/Get';
import Home from './src/home/Home';

import { StatusBar } from "expo-status-bar";
import Nav from './src/nav/Nav';
import Pro from './src/profile/Pro';
import Forms from './src/Login/Forms';

import Signin from './src/Login/Signin';

import Signup from './src/Login/Signup';
import Forgot from './src/Login/Forgot';
import Met from './src/Met/Met';

export default function App() {
  return (
    <>
    <StatusBar style='light'></StatusBar>
    <Nav />
    </>
  );
}

