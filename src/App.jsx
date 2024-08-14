import './App.css'
import { useState, useEffect } from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}