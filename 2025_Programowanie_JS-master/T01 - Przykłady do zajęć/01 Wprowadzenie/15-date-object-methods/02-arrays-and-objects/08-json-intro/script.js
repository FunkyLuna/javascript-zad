const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Konwersja do łańcucha JSON
const str = JSON.stringify(post);

console.log(str.id); // To wywoła błąd, ponieważ str jest ciągiem, a nie obiektem

// Przekształcenie JSON
const obj = JSON.parse(str);

console.log(obj.id); // 1

// JSON i tablice
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2); // "[{"id":1,"title":"Post One","body":"This is the body"},{"id":2,"title":"Post Two","body":"This is the body"}]"
