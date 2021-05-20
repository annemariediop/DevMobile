
document.addEventListener('deviceready', getContactItemList, false);
function getContactItemList(){
    console.log("ici");
    let options      = new ContactFindOptions();
    options.filter = "Fall";
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ['name'];
    
    navigator.contacts.find(fields, showContactList, onListContactError, options);
}
function showContactList(contacts){
    console.log("yaaaaaaaaaaa");
    console.log(contacts);
    let listeContacts='';
    for(let i=0; i<contacts.length; i++){
        listeContacts+=`
        <li contact-id="${contacts[i].id}">
            <a href="#contact-show">
                <img src="img/contact.png" >
                <h1>${contacts[i].name.formatted}</h1>
                <p>${contacts[i].phoneNumbers[0].value}</p>
            </a>
        </li>`;
        console.log("tour bi :"+contacts[i].name.formatted);
         console.log("numero bi :"+contacts[i].phoneNumbers[0].value);
        console.log(listeContacts);
        console.log("hello");
        contactlist.innerHTML+=listeContacts;
        $(contactlist).listview('refresh');
        $('li').click(function(){
            getContact($(this).attr('contact-id'));
        })
    $(contactlist).listview('refresh');

    }

}
function onListContactError(error){
    console.log("Erreur de recuperation");
    console.log(error);
}
function getContact(id){
    let options = new ContactFindOptions();
    options.filter = id
    options.multiple = false;
    let fields = ['id'];

    navigator.contacts.find(fields, handleContact, onListContactError, options);

}
function handleContact(){
   
    if(contacts.length != 0){
        console.log("aksina ffii")
        let  contact = contacts[0];
        contactName.innerHTML = contact.name.formatted;
        contactNumber.innerHTML =contact.phoneNumber[0].value;
        contactEmail.innerHTML = contact.adress
    }
    else
    {
        console.log("contact non trouvé");
    }
}

// function getContactItem(id){
//     let options      = new ContactFindOptions();
//     options.filter   = "sarr";
//     options.multiple = true;
   
//     let fields       = ['name'];
//     navigator.contacts.find(fields, showContactList, onListContactError, options);
// }