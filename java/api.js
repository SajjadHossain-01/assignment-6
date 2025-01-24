
const loadPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const datas = await res.json();
    const data = datas.posts;
    displayAuthorCard(data)
    // console.log( data)
}
const loadPost3 = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const datas = await res.json();
    displayAuthorCard2(datas)
    console.log(datas)
}



const loadPost2 = async (searchText) => {
    // console.log(searchText)
    const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const datas = await res.json();
    const data = datas.posts
    console.log(data)
    displayAuthorCard(data)
}

const displayAuthorCard = (data) => {
    //    console.log(data)
    toggoleLodingSpiner(true)
    setTimeout(toggoleLodingSpiner, 2000)
    const cardBody = document.getElementById('author-card');
    cardBody.textContent = '';

    data.forEach(card => {
        // console.log(card.isActive)
        const authorCardSection = document.getElementById('author-card');
        const div = document.createElement('div');
        // const badgeClass = `badge badge-sm -mt-3 ${card.isActive ? "bg-green-600" : "bg-red-600"}`;

        div.innerHTML = `
         <div class=" flex bg-[#F3F3F5]  gap-5 p-10 rounded-2xl ">
                <div class=" flex flex-col ">
                    <div class="flex"><img class="w-20 h-20 rounded-lg" src="${card.image}" alt="">
                        <div id="${card.id}" class="badge badge-sm -mt-3"></div>
                    </div>
                    <div></div>
                </div>
                <div class="flex flex-col flex-1 gap-4">
                    <div class="flex flex-col gap-3">
                        <h1 class="flex gap-9 font-semibold"># ${card.category} <span>Author : ${card.author.name}</span></h1>
                        <h1 class="text-2xl font-semibold">${card.title}</h1>
                        <p class="text-[#12132D99]">${card.description}</p>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="flex flex-1 justify-between">
                            <p class="flex gap-3"><img src="ima/Vector (1).svg" alt=""> ${card.view_count}</p>
                            <p class="flex gap-3"><img src="ima/Vector (2).svg" alt=""> ${card.comment_count}</p>
                            <p class="flex gap-3"><img src="ima/Vector.svg" alt="">${card.posted_time}min</p>
                        </div>
                        <div class="flex justify-end mr-10">
                            <button onclick="displayContent('${card.title}', '${card.view_count}')" > <img src="ima/email 1.svg" alt=""></button>
                        </div>
                    </div>
                </div>
            </div>
        `
        authorCardSection.appendChild(div);

        const badge = document.getElementById(card.id)
        const isActive = card.isActive;
        // console.log(isActive)
        if (isActive) {
            // badge.classList.remove('bg-red-600')
            badge.classList.add('bg-green-600')

        }
        else {
            // badge.classList.remove('bg-green-600')
            badge.classList.add('bg-red-600')

        }

    })


}

const displayAuthorCard2 = (data) => {
    console.log(data)
    const cardBody = document.getElementById('author-card');
    data.forEach(card => {
        console.log(card)
        const leatestCardSection = document.getElementById('leatest-post');
        const div = document.createElement('div');
        // const badgeClass = `badge badge-sm -mt-3 ${card.isActive ? "bg-green-600" : "bg-red-600"}`;

        div.innerHTML = `
         <div class="card bg-base-100 w-96 max-h-[482px] shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="${card.cover_image}" alt="Shoes"
                        class="rounded-xl" />
                </figure>
                <div class="card-body ">
                    <h2>${card.author?.posted_date|| 'no puslish date'}</h2>
                    <h1 class="card-title">${card.title}</h1>
                    <p>${card.description}</p>
                    <div class="flex gap-4">
                        <img class="w-11 h-11 rounded-full" src="${card.profile_image}" alt="">
                        <div>
                            <h1>${card.author?.name}</h1>
                            <h1>${card.author?.designation || 'unknown'}</h1>
                        </div>
                    </div>
                </div>
            </div>
        `

        leatestCardSection.appendChild(div);
    })
}

const displayContent = (card1, card2) => {
    console.log(card1, card2)
    const displyDiv = document.getElementById('show-read-card');
    const div = document.createElement('div');
    div.classList = 'flex items-center bg-white p-3 rounded-lg my-4'
    div.innerHTML = `
    <h1 class="text-lg font-semibold">${card1}</h1>
    <p class="flex gap-1"><img src="ima/Vector (1).svg" alt=""> ${card2}</p>
        `;
    displyDiv.appendChild(div);
}


const toggoleLodingSpiner = (isloding) => {
    const lodingSpinaer = document.getElementById('loading-phone');
    if (isloding) {
        lodingSpinaer.classList.remove('hidden')
    }
    else {
        lodingSpinaer.classList.add('hidden')
    }

}


const showSearchResult = () => {
    const searchValue = document.getElementById('search-value');
    const searchText = searchValue.value;

    loadPost2(searchText)
    console.log(searchText)
}
loadPost()
loadPost3()
