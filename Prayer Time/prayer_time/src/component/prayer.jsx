import {useState } from "react"
import "../styles/prayer.css"
function PrayrtTime(){

    const [city,setcity]=useState('');
    const [data,setdata]=useState('')
  
   let all_data=async()=>{
  let url = `https://api.aladhan.com/v1/timingsByCity/02-11-2025?city=${city}&country=`;
    await fetch(url)
    .then((response) => response.json())
    .then((data) => setdata(data))
    .catch((err) => console.log("Error:", err));
};
console.log(data)
     
    return(
        <>
        <div className="parent">
            <div className="card_start">
                <input  type="text" onChange={(e)=>setcity(e.target.value)} placeholder="Enter City" name="" id="" />
                <button onClick={all_data}>Update</button>
            </div>
            {data &&(
                <>
                <div className="start">
                    <h4><i class="fa-solid fa-calendar-days"></i>{data.data.date.readable}</h4>
                    <h4><i class="fa-solid fa-clock"></i>{data.data.meta.timezone}</h4>

                </div>
                 <div className="card_content">
                <div className="box">
                    <h4>Fajr</h4>
                    <h5><i class="fa-solid fa-clock"></i>{data.data.timings.Fajr}</h5>

                </div>
                 <div className="box">
                    <h4>Sunrise</h4>
                    <h5><i class="fa-solid fa-clock"></i>{data.data.timings.Sunrise}</h5>

                </div>
                 <div className="box">
                    <h4>Dhuhr</h4>
                    <h5><i class="fa-solid fa-clock"></i>{data.data.timings.Dhuhr}</h5>

                </div>
                 <div className="box">
                    <h4>Asr</h4>
                    <h5><i class="fa-solid fa-clock"></i>{data.data.timings.Asr}</h5>

                </div>
                  <div className="box">
                    <h4>Maghrib</h4>
                    <h5><i class="fa-solid fa-clock"></i>{data.data.timings.Maghrib}</h5>

                </div>
                  <div className="box">
                    <h4>Isha</h4>
                    <h5><i class="fa-solid fa-clock"></i>{data.data.timings.Isha}</h5>

                </div>

            </div>
                </>
            )}
           

        </div>
        </>
    )
}
export default  PrayrtTime