- create a variable for the products div called productsDOM
- create an array, inside the array create an object that will hold our data, title, info, and price
- then lets create a function called getPosts and lets set a timeout for 1 second which basically mimics pulling data from a server
- create a variable called output which we will input out data into
- create a forEach loops of the posts, inside we will pass 2 parameters, the post and the index
- for each post we want to add it to the output variable and says += which meand append then use the back ticks and use template literals
- then write the html
- i am creating the div class called product which is a child of the products div so this will be placed inside that div
- next we write a p tag and then use ${} to add the post
- lastly we want to add the output to the products div which we assisgned to a variable called productsDOM
- then call the function
-
so in one section the data will be output to the page

CALLBACKS
- create a function called createPosts which will take in a new post
-lets create another settimeout that takes 2 seconds
- inside there will want to call the posts variable and push to the posts array by calling post
- so bascially we want to get the post then create a new one
- so lets call the creat post function and pass in in object of what we want to create
- lets create another object using the same, title, info, and price
- so if we run this the createPost will not display the text to the page because the createPost took longer to run then the getPosts
- the getPosts ran in 1 second
- by time time we ran the createPost the DOM was already displayed so we need to create a callback
- inside the createPost function we are going to add in the callback as a function and we want this i be called right after the post is pushed
- then to call this will will delete the calling of getPosts() and then add getPosts to the end of createPost
- so what happens is its waits 2 seconds and then shows all the posts
