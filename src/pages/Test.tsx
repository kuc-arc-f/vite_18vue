import * as React from 'react';
import {useState, useEffect}  from 'react';
let apiData: string = "";
//
const dataItems: any[] = [
    {id:1, title: "title_1"},
    {id:2, title: "title_2"},
    {id:3, title: "title_3"},
  ];
let items: any[] = [];
//
export default function Test() {
    const [updatetime, setUpdatetime] = React.useState("");
    const msg: string = "Test";
    useEffect(() => {
        (async () => {
            items = dataItems;
            setUpdatetime(new Date().toString());
        })()
      }, []);
    //
    const updateTimestap = function() {
        const dt = new Date().toString();
        setUpdatetime(dt);
    }
    const test = async function(){
        const res = await fetch("/api/test");
        const d = await res.json();
        apiData = d.msg;
        updateTimestap();
console.log(d);
    };
    //
    return (
    <>
        <h1>Test!</h1>
        <p>apiData=[ {apiData} ]</p>
        <hr />
        <button onClick={()=>{test()}}>Test</button>
        <hr />
        {items.map((item: any) => {
        return (
        <div key={item.id}>
          <h3 className="text-3xl font-bold">{item.title}</h3>
          <span>id: {item.id}</span>
          <hr />
        </div>
        );
        
      })}
    </>
    )
}
