function index() {
  return <div></div>
}

export default index
// import styles from "./index.module.css"
// import { useState } from "react"

// export default function App() {
//   const [lat, setLat] = useState(0)
//   const [lng, setLng] = useState(0)
//   const [count, setCount] = useState(0)
//   // const [error, setError] = useState(null)
//   // const [isLoading, setIsLoading] = useState(false)

//   function handlePosition() {
//     // setCount((count) => count + 1)
//     // if (!navigator.geolocation) {
//     //   setError("Your browser does not have geolocation")
//     //   return
//     // }
//     // setIsLoading(true)
//     // navigator.geolocation.getCurrentPosition((pos) => {
//     //   setLat(pos.coords.latitude)
//     //   setLng(pos.coords.longitude)
//     // })
//     // setIsLoading(false)
//   }

//   return (
//     <>
//       <div>
//         <button disabled={isLoading} onClick={handlePosition}>
//           Get my position
//         </button>
//         {error ? <p>{error}</p> : null}
//         <p>
//           {isLoading ? "Loading... " : `Your GPS position is: `}
//           {isLoading ? (
//             ""
//           ) : (
//             <a
//               target="_blank"
//               rel="noreferrer"
//               href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
//             >
//               {lat},{lng}
//             </a>
//           )}
//         </p>
//         <p>
//           {isLoading
//             ? "Loading..."
//             : `You requested your position ${count} times`}
//         </p>
//       </div>
//     </>
//   )
// }
