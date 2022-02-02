window.addEventListener('DOMContentLoaded',()=>{

    const tabContent = document.querySelectorAll('.tabcontent'),
          tabheaderItem = document.querySelectorAll('.tabheader__item'),
          tabheaderItemsParent = document.querySelector('.tabheader__items');

    function hideTabsContent(){

        tabContent.forEach(item => {
            item.style.display = 'none';
        });

        tabheaderItem.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
    };

    function showTabContent(i=0){
        tabContent[i].style.display = 'block';
        tabheaderItem[i].classList.add('tabheader__item_active');
        
    }

    hideTabsContent();
    showTabContent();

    tabheaderItemsParent.addEventListener('click',(event)=>{

        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabheaderItem.forEach((item,index)=>{
                if(target==item){
                    hideTabsContent();
                    showTabContent(index);
                }
            });

        }
    });
});