import React from "react";

const ShareLink = (props) => {

    const copyLink = () => {
        let link = `${window.location.host}/${props.type}/${props.id}`
        navigator.clipboard.writeText(link);
        alert("Link copied to clipboard!")
    }

    return ( 
        <i className="fas fa-share-alt-square Link" title="Copy link" onClick={ () => copyLink()}></i>
     );
}
 
export default ShareLink;