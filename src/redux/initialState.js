const initialState = {
  tables: [
    {
      id: '1',
      status: 'Free',
      peopleMax: 5,
      peopleCurrent: 0,
      bill: 0,
    },
    {
      id: '2',
      status: 'Busy',
      peopleMax: 3,
      peopleCurrent: 2,
      bill: 0,
    },
    {
      id: '3',
      status: 'Cleaning',
      peopleMax: 2,
      peopleCurrent: 0,
      bill: 0,
    },
    {
      id: '4',
      status: 'Reserved',
      peopleMax: 5,
      peopleCurrent: 0,
      bill: 0,
    },
    {
      id: '5',
      title: 'Article title 5',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-07-2023'),
      author: 'John Doe',
      category: 'Music',
    },
    {
      id: '6',
      title: 'Article title 6',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-12-2023'),
      author: 'John Doe',
      category: 'Movies',
    },
  ],
  categories: ['News', 'Sport', 'Movies', 'Music'],
  selectedCategory: '',
};

export default initialState;
