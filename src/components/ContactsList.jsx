import React from "react";
import contacts from './contacts.json';
import './ContactsList.css';


//the contact list is in a jason file that we imported
const ContactsList = () =>{
    return(
      <div className="contactsList">
        <h1 className="title">List Of Contacts</h1>
        <table className="contactsTable">
          <tr>
            <th>first Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>phone Number</th>
          </tr>
          {
            //we fetsh the jason file to get contacts from it using the table function map
            //for each contact we create a line in our table 

          contacts.map(contact =>{
            return (
              <tr id={contact.id} >
                <td>{contact.firstName} </td>
                <td>{contact.lastName} </td>
                <td>{contact.email} </td>
                <td>{contact.PhoneNumber} </td>
              </tr>
              
            )
             })
          }
        </table>
        
      </div>
    )
    
};

export default ContactsList;