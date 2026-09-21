document.addEventListener('DOMContentLoaded',()=>{
    const openModalButton = document.querySelectorAll('.btn-modal');
    const closeModalButton = document.querySelectorAll('.close-button');
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navi-item');
    const navBar = document.querySelector('.navigation_bar');


    openModalButton.forEach(button => {
        button.addEventListener('click', ()=>{
            const card = button.closest('.house-card');
            const modalId = card.dataset.modal;
            const targetModal = document.getElementById(modalId);
            if(targetModal){
                targetModal.classList.add('active');
            }
        });
    });
    closeModalButton.forEach(button =>{
        button.addEventListener('click',()=>{
            const modal = button.closest('.modal');
            if(modal){
                modal.classList.remove('active');
            }
        });
    });

    function handleNavbarResize(){
        if(window.scrollY >50){
            navBar.classList.add('scrolled');
        }else{
            navBar.classList.remove('scrolled');
        }
    }

    function highlightNavOnScroll(){
        const navHeight = navBar ? navBar.offsetHeight : 0;
        let currentSectionId = '';
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 5;
        if (isAtBottom && sections.length > 0) {
            currentSectionId = sections[sections.length - 1].getAttribute('id');
        } else {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= navHeight + 100 && rect.bottom > navHeight) {
                    currentSectionId = section.getAttribute('id');
                }
            });
        }
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll',() => {
        highlightNavOnScroll();
        handleNavbarResize();
    });

    const storiesContainer = document.querySelector('.stories-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (storiesContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            storiesContainer.scrollBy({ left: -320, behavior: 'smooth' }); 
        });

        nextBtn.addEventListener('click', () => {
            storiesContainer.scrollBy({ left: 320, behavior: 'smooth' }); 
        });
    } 
});
