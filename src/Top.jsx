import * as React from 'react';

console.log("env=", process.env.NODE_ENV)
//
function Page() { 
    return (
    <html>
        <head>
            <title>welcome</title>
            {(process.env.NODE_ENV === "develop") ? (
                <link href="/static/main.css" rel="stylesheet" /> 
            ): (
                <link href="/public/static/main.css" rel="stylesheet" /> 
            )} 
        </head>
        <a href="/">[ home ]</a>
        <a href="/about">[ about ]</a>
        <hr />        
        <div id="root"></div>
        <h1 className="text-4xl font-bold">hello</h1>
    </html>
    );
}
export default Page;
/*
*/
