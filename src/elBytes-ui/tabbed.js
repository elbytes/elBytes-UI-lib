import './styles/tabbed.css';

class Tabbed {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }

    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e)=>{
                this.toggleTabs(e);
                this.toggleContent(e);
            });
        });
    }

    toggleTabs(e){
        //remove current active classes
        this.tabs.forEach(tab =>{
            tab.classList.remove('active');
        })
        //add active class to clicked tab
        e.target.classList.add('active');
    }

    toggleContent(e){
        this.container.querySelectorAll('.content').forEach(contentItem =>{
            contentItem.classList.remove('active');
        });
        //get the id from data-target attribute of the li 
        const selectedTab = e.target.getAttribute('data-target');
        //get the content based on the id grabbed above
        const selectedContent = this.container.querySelector(selectedTab);
        //add the active class to the content of the selected tabd
        selectedContent.classList.add('active');
        };
    }

export {Tabbed as default};