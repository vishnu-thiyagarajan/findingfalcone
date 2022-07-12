import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import * as React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  const navigate = useNavigate();
  const [response, setResponse] = React.useState({
    planets: null,
    vehicles: null,
  })
  const [time, setTime] = React.useState(0);
  const [planets, setPlanets] = React.useState(null);
  const [vehicles, setVehicles] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  let token = null;

  const reset = ()=>{
    navigate("/")
    setPlanets(null)
    setVehicles(null)
    setResult(null)
    setTime(0)
  }
  const findFalcone = async (planet_names, vehicle_names) => {
    setLoading(true)
    if(!token){
      const tokenRes = await fetch(`https://findfalcone.herokuapp.com/token`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(),
      })
      const response = await tokenRes.json();
      token = response.token
    }
    const resultRes = await fetch(`https://findfalcone.herokuapp.com/find`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token, planet_names, vehicle_names}),
    })
    const response = await resultRes.json();
    setResult(response)
    setLoading(false)
    navigate("/result")
  }

  React.useEffect(() => {
    async function fetchData() {
        const resp = {
          planets: null,
          vehicles: null,
        }
        if(!response.planets) {
            const response = await fetch(`https://findfalcone.herokuapp.com/planets`)
            resp.planets = await response.json();
            setPlanets(resp.planets)
        }
        if(!response.vehicles) {
          const response = await fetch(`https://findfalcone.herokuapp.com/vehicles`)
          let res = await response.json();
          res = res.map((obj, index)=>{
            obj.id = index+1
            return obj
          })
          resp.vehicles = res
          setVehicles(resp.vehicles)
        }
        setResponse(resp)
      }
    if(!planets && response.planets) setPlanets([...response.planets])
    else if(!vehicles && response.vehicles) setVehicles([...response.vehicles])
    else fetchData();
   // eslint-disable-next-line
  }, [planets, vehicles]);
  return (
    <>
      <NavBar reset={reset}/>
        <Routes>
          <Route path="/" element={<Home planets={planets} vehicles={vehicles} time={time} setTime={setTime} findFalcone={findFalcone} loading={loading}/>}/>
          <Route path="/result" element={<Result open={Boolean(result)} result={result} reset={reset} time={time}/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
