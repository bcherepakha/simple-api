// index.js
module.exports = () => {
  const data = {
          posts: []
      },
      Chance = require('chance'),
      chance = new Chance();

  data.author = {
      firstName: chance.first(),
      lastName: chance.last(),
      email: chance.email(),
      avatar: chance.avatar()
  };

  for (let i = 0; i<10; i++) {
      data.posts.push({
          id: i + 1,
          title: chance.sentence({words: 5}),
          content: `
            <p>${chance.paragraph({sentences: 1})}</p>
            <p>${chance.paragraph({sentences: 2})}</p>
            <p>${chance.paragraph({sentences: 1})}</p>`,
          created: chance.timestamp()
      })
  }

  return data;
}
