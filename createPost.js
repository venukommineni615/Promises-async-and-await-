const posts = [];

let lastActivityTime = null;



function printPostsAndActivityTime() {

  console.log("All Posts:");

  posts.forEach((post) => {

    console.log(post.title);

  });

  console.log("Last Activity Time:", lastActivityTime);

}



function createPost(postTitle) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      posts.push({ title: postTitle });

      resolve();

    }, 1000);

  });

}



function updateLastUserActivityTime() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      lastActivityTime = new Date().toLocaleString();

      resolve(lastActivityTime);

    }, 1000);

  });

}



function deletePost() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      posts.pop();

      resolve();

    }, 30000);

  });

}
async function calling(){
await createPost("First Post")
await createPost("second post")
let lastActivityTime=await updateLastUserActivityTime()
let printPost= printPostsAndActivityTime()
await deletePost();
let print=printPostsAndActivityTime();
}  
calling()
    
        
    
     
