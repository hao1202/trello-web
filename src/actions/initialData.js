export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-3', 'column-2', 'column-1', 'column-4'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'To do column',
          cardOrder: [
            'card-1',
            'card-2',
            'card-3',
            'card-4',
            'card-5',
            'card-6',
            'card-7',
          ],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 1',
              cover:
                'https://scontent.cdninstagram.com/v/t51.2885-15/412550899_1095097411501991_8171364124495998459_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=0sX5WC0J-vEAX-h3EnW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI2NDM3Mzc3NTE2MDE3NzE3OQ%3D%3D.2-ccb7-5&oh=00_AfC-vpX-9x0HGwPgBbfCJHkczlufVqgSf_2dBR5v5pey_w&oe=658EC9E8&_nc_sid=10d13b',
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 2',
              cover: null,
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 3',
              cover: null,
            },
            {
              id: 'card-4',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 4',
              cover: null,
            },
            {
              id: 'card-5',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 5',
              cover: null,
            },
            {
              id: 'card-6',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 6',
              cover: null,
            },
            {
              id: 'card-7',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 7',
              cover: null,
            },
          ],
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'Title of column 2',
          cardOrder: ['card-8', 'card-9', 'card-10'],
          cards: [
            {
              id: 'card-10',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 10',
              cover: null,
            },
            {
              id: 'card-8',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 8',
              cover: null,
            },
            {
              id: 'card-9',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 9',
              cover: null,
            },
          ],
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'Title of column 3',
          cardOrder: ['card-11', 'card-12', 'card-13', 'card-14'],

          cards: [
            {
              id: 'card-14',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 11',
              cover: null,
            },
            {
              id: 'card-12',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 12',
              cover: null,
            },
            {
              id: 'card-13',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 13',
              cover: null,
            },
            {
              id: 'card-11',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 14',
              cover: null,
            },
          ],
        },
        {
          id: 'column-4',
          boardId: 'board-1',
          title: 'Title of column 4',
          cardOrder: ['card-15', 'card-16'],
          cards: [
            {
              id: 'card-15',
              boardId: 'board-1',
              columnId: 'column-4',
              title: 'Title of card 15',
              cover: null,
            },
            {
              id: 'card-16',
              boardId: 'board-1',
              columnId: 'column-4',
              title: 'Title of card 16',
              cover: null,
            },
          ],
        },
      ],
    },
  ],
};
