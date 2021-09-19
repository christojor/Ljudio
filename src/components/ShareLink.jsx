import React from "react";
import { useContext } from "react";
import { Context } from "../Store";

const ShareLink = (props) => {

    const [state, dispatch] = useContext(Context);

    let link = ''

    const copyLink = () => {
        if(props.type == 'album' || props.type == 'Album')
        {
            link = `${window.location.host}/${props.type}/${props.artist}/${props.id}`
        }
        else{
            link = `${window.location.host}/${props.type}/${props.id}`
        }
        navigator.clipboard.writeText(link)
        alert("Link copied to clipboard!")
    }

    return ( 
        <i className="fas fa-share-alt-square Link" title="Copy link" onClick={ () => copyLink()}></i>
     );
}
 
export default ShareLink;