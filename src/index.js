import  Tooltip from './elBytes-ui/tooltip'
import Dropdown from './elBytes-ui/dropdown'
import Tabbed from './elBytes-ui/tabbed'
import Notification from './elBytes-ui/notification'
//create a new tooltip 
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create new dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drodown=>{
    const dropDownInstance = new Dropdown(drodown);
    dropDownInstance.init();
})

//create new tabbed content
const tabbed = new Tabbed(document.querySelector('.tabs'));
tabbed.init();

//create new notification
const notification = new Notification();
notification.init();
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    notification.showMessage('This is a test notification!')
});

