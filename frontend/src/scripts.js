async function handleSearch (e){
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:3000/api/scrape?keyword=${e.target.search.value}`);
        const items = await response.json();

    } catch (error) {
        console.error(error)
        await showNotification(error.message)
    }
}

async function showNotification(message){
    var toast = document.createElement('div');
    toast.classList.add('toast', 'show');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function() {
        toast.remove();
    }, 3000);
}

async function loadCards(cards){
    const cardContainer = document.createElement('div');
    cardContainer.id = 'card-container';
    for(let card of cards){
        let cardComponent = document.createElement('div');
        cardComponent.classList.add('card');

        let cardHeader = document.createElement('div');
        let cardBody = document.createElement('div');        
        let cardFooter = document.createElement('div');

        cardHeader.classList.add('card-header');
        cardBody.classList.add('card-body');
        cardFooter.classList.add('card-footer');

        


        
    }
    document.body.append(cardContainer)
}

// TODO: first load check localStorage
// async function checkStorage(){}