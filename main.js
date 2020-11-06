const productsDOM = document.querySelector('.products');

const posts = [
    { title: 'Crooks and Castles', info: 'grey t-shirt', price: '5.00' },
    { title: 'Adidas', info: 'White t-shirt', price: '10.00' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `
            <div class="product">
                <p>${post.title}</p>   
                <p>${post.info}</p>
                <p>${post.price}</p> 
            </div>       
            `
        });
        productsDOM.innerHTML = output;

    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}


createPost({ title: 'Nike', info: 'sweatpants', price: '20.00' }, getPosts)
