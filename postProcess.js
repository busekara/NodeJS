const posts = [
  { author: "Buse", title: "Post1" },
  { author: "Emre", title: "Post2" },
  { author: "Doruk", title: "Post3" },
];
const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    try {
      posts.push(newPost);
      resolve(posts);
    } catch (err) {
      reject(err);
    }
  });
};

const orderPost = () => {
  return new Promise((resolve, reject) => {
    if (posts.length > 0) {
      posts.map((post) => {
        console.log(post.title);
      });
      resolve("Veriler sıralandı.");
    } else {
      reject("Bir hata oluştu.");
    }
  });
};

async function process() {
  const newPost = { author: "XYZ", title: "Lorem" };
  try {
    await orderPost();
    await addPost(newPost);
    await orderPost();
    console.log("İşlem başarılı.");
  } catch (error) {
    console.log(error);
  }
}

process();
