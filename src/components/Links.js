import React  from "react";


 export default function Link(props) {
     console.log("props");
    return (
        <>
        <h3>Links</h3>
        <a href={props.links.github}>{props.links.github}</a>
        <a href={props.links.linkedin}>{props.links.linkedin}</a>
        </>
    )
 }