// Challenge
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((user) => {
    console.log("User data:", user);
  });

async function exampleOne() {
    const responseOne = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const dataOne = await responseOne.json();
    console.log(dataOne);
    return dataOne
}

fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((comment) => {
    console.log("Comment data:", comment);
  })
  .catch((error) => {
    console.error("Error fetching comment:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    console.log("All posts:", posts);
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
  });

// 1 album iig fetch hiij avaad ter album-niha buh zurgiig avah
fetch("https://jsonplaceholder.typicode.com/albums/1")
  .then((response) => response.json())
  .then((album) => {
    console.log("Album data:", album);
    return fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
    );
  })
  .then((response) => response.json())
  .then((photos) => {
    console.log("Photos in Album 1:", photos);
  })
  .catch((error) => {
    console.error("Error fetching album or photos:", error);
  });

//   User data fetch hiiged ter user-inhe post iig fetch hiij avah
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    console.log("User data:", user);
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
  })
  .then((response) => response.json())
  .then((posts) => {
    console.log("User posts:", posts);
  })
  .catch((error) => {
    console.error("Error fetching user or posts:", error);
  });
