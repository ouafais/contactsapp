import React from "react";
import './NewContacts.css';


const NewContact = () =>{     
    //function that handles adding new contact
    function handleSubmit(event) {
        event.preventDefault();
       

        const newContact = new FormData(event.target);
      
        const newContactobject = Object.fromEntries(newContact.entries());
        // here we need to add the values of our new contact to our json file using node
      
      }
      // we add an eventlistner to our submit button
      React.useEffect(()=>{
        const form = document.querySelector('form');
        form.addEventListener('submit', handleSubmit);
      });
      
    return(
      <div >
          <form action="" method="POST" id="newContactForm" className="newContact" >
              <label htmlFor="fname" className="labelZone">First Name : </label>
              <input type="text" id="fname" name="fname" className="textZone"></input><br></br>
              <label htmlFor="lname"className="labelZone">Last Name : </label>
              <input type="text" id="lname" name="lname" className="textZone"></input><br></br>
              <label htmlFor="email" className="labelZone">Email : </label>
              <input type="email" id="email" name="email"className="textZone"></input><br></br>
              <label htmlFor="tel" className="labelZone">Phone Number: </label>
              <input type="text" id="tel" name="tel" className="textZone"></input><br></br>
              <input type="submit" value="Submit" className="submitBtn" ></input>
              
          </form>   
               
      </div>
    )
    
};

export default NewContact;