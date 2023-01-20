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
        return "First Name : " + this.firstName + "Last Name : " + this.lastName + "Address : " + this.address + "City : " + this.city + "State : " + this.state + "zip code : " + this.zip + "Phone Number : " + this.phoneNumber + "email : " + this.email;
    }
}

