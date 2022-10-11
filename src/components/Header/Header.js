import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (<>
        <h1 title='header' className="header">{title}</h1>
        <h3 className="header" data-testid="header-2" >{"cat"}</h3>
    </>)
}
