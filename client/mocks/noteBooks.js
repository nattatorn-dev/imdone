import faker from 'faker'

export default function generateNoteBooks(limit = 10) {
  let notebooks = []

  for (let i = 0; i < limit; ++i) {
    notebooks.push({
      _id: `${i + 1}`,
      title: faker.lorem.sentence(),
      excerpt: faker.lorem.lines(),
      description: faker.lorem.paragraphs(),
      url: faker.internet.url(),
      image: {
        url: i % 2 === 0 ? faker.image.avatar() : null,
      },
      tags: [
        {
          name: faker.lorem.slug(),
        },
        {
          name: faker.lorem.slug(),
        },
        {
          name: faker.lorem.slug(),
        },
        {
          name: faker.lorem.slug(),
        },
      ],
      isFavorite: true,
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
    })
  }

  return notebooks
}
