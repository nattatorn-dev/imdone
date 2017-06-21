import faker from 'faker'

const generateNoteBooks = (limit = 20) => {
  let notebooks = []

  for (let i = 0; i < limit; ++i) {
    notebooks.push({
      _id: `${i + 1}`,
      title: faker.lorem.sentence(),
      excerpt: faker.lorem.paragraphs(2),
      description: faker.lorem.paragraphs(),
      image: {
        url: faker.image.avatar(),
      },
      createdAt: faker.date.past(),
      updatedAt: new Date(),
      tags: [
        {
          name: faker.lorem.slug(),
        },
        {
          name: faker.lorem.slug(),
        },
      ],
    })
  }

  return notebooks
}

export default generateNoteBooks
