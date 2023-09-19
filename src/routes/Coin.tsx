import { useEffect } from "react";
import { useParams } from "react-router-dom";

// interface RouteParams{
//   coinId: string;
// }

//router-dom-V6부터 타입지정 안해줘도됨

function Coin() {
  const { coinId } = useParams();//타입 지정을 해줄 필요가 없다
  
  useEffect(()=>{
    (async() =>{
      const response = await fetch(`https://api.coinpaprika.com/v1/coins/$(coinId)`)
      const json = await response.json()
    })();
  })
  
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;