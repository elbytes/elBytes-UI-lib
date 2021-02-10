import './styles/notification.css'
class Notification{
    constructor(){
        this.notification = document.createElement('div');
    }

    init(){
        this.notification.classList.add('notification');
        document.querySelector('body').appendChild(this.notification);
    }

    showMessage(message){
        this.notification.textContent=message;
        this.notification.classList.add('active');
        setTimeout(()=>{
            this.notification.classList.remove('active');
        }, 2000);
    }
}


export {Notification as default};