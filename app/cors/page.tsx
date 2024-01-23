"use client";
async function getData() {
    const res = await fetch("https://cors-six-omega.vercel.app/api");
    const data = await res.json();
    return data
}
function ShowData() {
    const data = getData()
    return (
        <div>
            <button onClick={()=>{}}>Llamar a POST</button>
            <div>{data}</div>
        </div>
    )
}
export default function CorsPage() {
    return (
        <div>
            <ShowData/>
        </div>
    )
}