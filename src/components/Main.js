import React from 'react';
export default function Main(props){
  return(
    <main className={props.darkMode?"dark":""}>
      <h1 className='list-title'>Fun facts about react</h1>
      <ul className='list'>
       <li>Was first released in 2013</li>
       <li>Was originally created by Jordan Walke</li>
       <li>Has well over 100k stars on GitHub</li>
       <li>Is maintained by facebook</li>
       <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
    
  )
}