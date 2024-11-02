// import { useState } from "react"
// export function useGeolocation() {
//   const [error, setError] = useState(null)
//   // const [isLoading, setIsLoading] = useState(false)

//   setCount((count) => count + 1)
//   if (!navigator.geolocation) {
//     setError("Your browser does not have geolocation")
//     return
//   }
//   setIsLoading(true)
//   let lat = ""
//   let lng = ""
//   navigator.geolocation.getCurrentPosition((pos) => {
//     // setLat(pos.coords.latitude)
//     // setLng(pos.coords.longitude)
//     lat = pos.coords.latitude
//     lng = pos.coords.longitude
//   })
//   setIsLoading(false)
//   return [lat, lng, error]
// }
