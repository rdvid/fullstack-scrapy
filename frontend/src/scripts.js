async function handleSearch (e){
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:3000/api/scrape?keyword=${e.target.search.value}`);
        const data =  await response.json();

        if (response.status !== 200){          
            return await showNotification(response.status, data.message)    
        }

        return await loadCards(data);

    } catch (error) {
        console.error(error)
        await showNotification(error.message)
    }
}

async function showNotification(status, message){
    var toastColorClass = 'success';
    if(status !== 200){
        toastColorClass = 'error';
    }
    var toast = document.createElement('div');
    toast.classList.add('toast', 'show', toastColorClass);
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function() {
        toast.remove();
    }, 3000);
}

async function loadCards(cards){

    let container = document.getElementById('card-container');
    if(container){
        container.remove();
    }

    const cardContainer = document.createElement('div');
    cardContainer.id = 'card-container';
    
    for(let card of cards){
        // creating main grid container for cards
        let cardComponent = document.createElement('div');
        cardComponent.classList.add('card');

        // header creation and infer class atribs
        let cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", card.imageUrl); // Replace with your image URL
        imgElement.setAttribute("width", "200"); // Set width
        imgElement.setAttribute("height", "200"); // Set height
        cardHeader.append(imgElement);
        // body
        let cardBody = document.createElement('div');        
        cardBody.classList.add('card-body');
        const h2Element = document.createElement("h2");
        h2Element.textContent = card.title;
        cardBody.append(h2Element);

        // footer
        let cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');

        const spanRating = document.createElement('span');
        const spanPrice = document.createElement('span');

        spanRating.classList.add('chip');
        spanPrice.classList.add('chip');

        const starIcon = document.createElement('i');
        starIcon.classList.add('fa-solid', 'fa-star'); 
        // starIcon.className = "fa-solid fa-star";
        spanRating.append(starIcon);
        spanRating.textContent = `${card.rating.replace("out of 5 stars", "of 5")} (${card.reviewsCount})`;
        
        const cartIcon = document.createElement('i');
        cartIcon.classList.add('fa-solid', 'fa-cart-shopping'); 
        spanPrice.append(cartIcon);
        spanPrice.textContent = ` ${card.price}`;

        cardFooter.append(spanRating, spanPrice);

        cardComponent.append(
            cardHeader,
            cardBody,
            cardFooter
        );

        cardContainer.append(cardComponent);
    }
    document.body.append(cardContainer)
}

// TODO: first load check localStorage
// async function checkStorage(){}