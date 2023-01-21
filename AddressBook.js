/**
 * @author Govardhan Reddy
 */
class ContactDetails {
    /**
     * In this class create contact details as data members
     */
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    /**
     * Create a peremeterized constructor
     */
    ContactDetails(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    /**
     * Create a default constructor
     */
    ContactDetails() {

    }
    /**
     * Create a toString method
     */
    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", zip code : " + this.zip + ", Phone Number : " + this.phoneNumber + ", email : " + this.email;
    }
}
function firstName(value) {
    /**
     * In this method validate the first name and last name
     */
    let pattern = new RegExp('^[A-Z]{1}[a-z]{2,20}$');
    let input;
    while (true) {
        input = prompt("Enter " + value + " (first letter is upper case)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function address(value) {
    /**
     * In this method validate the address, city and state
     */
    let pattern = new RegExp('^[A-Z]{1}[a-z]{3,20}$');
    let input;
    while (true) {
        input = prompt("Enter " + value + " (first letter is upper case)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function zip() {
    /**
     * In this method validate the zip code
     */
    let pattern = new RegExp('^[0-9]{6}$');
    let input;
    while (true) {
        input = prompt("Enter zip code (Enter 6 numbers)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function phoneNumber() {
    /**
     * In this method validate the mobile number
     */
    let pattern = new RegExp('^[7-9]{1}[0-9]{9}$');
    let input;
    while (true) {
        input = prompt("Enter Mobile Number (Enter 9 numbers)");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
function email() {
    /**
     * In this method validate the email
     */
    let pattern = new RegExp('^[A-Za-z]{3,20}[0-9]{0,10}[@]{1}[gmail.com]{9}$');
    let input;
    while (true) {
        input = prompt("Enter email ");
        let status = pattern.test(input);
        if (status) {
            break;
        }
    }
    return input;
}
/**
 * Create Array and ContactDetails Objects
 */
contactList = new Array();
function addContactDetails() {
    /**
     * In this method Ability to add contact details to address book
     */
    contact = new ContactDetails();
    contact.firstName = firstName('first name');
    let status;
    status = contactList.filter(x => x.firstName == contact.firstName);
    if (status == 0) {
        contact.lastName = firstName('last name');
        contact.address = address('Address');
        contact.city = address('city');
        contact.state = address('State');
        contact.zip = zip();
        contact.phoneNumber = phoneNumber();
        contact.email = email();
        contactList.push(contact)
    }
    else {
        console.log(contact.firstName + " details is already exists");
    }
}
function printContactDetails() {
    /**
     * In this method print the Address book contact details
     */
    console.log(contactList);
}
function editContactDetails() {
    /**
     * In this method edit the existing contact details
     */
    let input = prompt("Enter first name");
    let status = true;
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].firstName == input) {
            contactList.splice(i, 1);
            status = false;
            break;
        }
    }
    if (status == true) {
        console.log(input + " details not found");
    }
    else {
        addContactDetails();
    }
}
function deleteContactDetails() {
    /**
     * In this method delete the contact details use first name
     */
    let input = prompt("Enter first name");
    let status = true;
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i].firstName == input) {
            contactList.splice(i, 1);
            status = false;
            break;
        }
    }
    if (status == true) {
        console.log(input + " details not found");
    }
    else {
        console.log(input + " details are deleted");
    }
}
function countOfContacts() {
    /**
     * In this method print the total number of contacts in array
     */
    let count = contactList.length;
    console.log("Cont of contact details : " + count);
}
