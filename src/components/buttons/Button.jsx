import React from 'react'
import { Link } from 'react-router-dom';
import './button.css';

export default function Button({type,style,to}) {
 
  return (
    <span>
        <Link className={style} to={to}>{type}</Link>
    </span>
  )
}
