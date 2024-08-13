import React from 'react';
import NewItem from './NewItem';

const news = [
  {
    title: 'Noticia 1',
    author: 'https://via.placeholder.com/100/100',
    description: 'Descripcion 1',
    tags: [
      {
        name: 'Conferencia',
        color: 'black',
        bgColor: 'white',
      },
      {
        name: 'tag2',
        color: 'white',
        bgColor: 'green',
      },
    ],
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Noticia 1',
    author: 'https://via.placeholder.com/10/100',
    description: 'Descripcion 1',
    tags: [
      {
        name: 'NEW',
        color: 'black',
        bgColor: 'white',
      },
      {
        name: 'NEW',
        color: 'white',
        bgColor: 'orange',
      },
      {
        name: 'Publicacion',
        color: 'white',
        bgColor: 'blue',
      },
    ],
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Noticia 1',
    author: 'https://via.placeholder.com/10/100',
    description: 'Descripcion 1',
    tags: [
      {
        name: 'NEW',
        color: 'black',
        bgColor: 'white',
      },
      {
        name: 'NEW',
        color: 'white',
        bgColor: 'orange',
      },
      {
        name: 'Publicacion',
        color: 'white',
        bgColor: 'blue',
      },
    ],
    image: 'https://via.placeholder.com/100',
  },
];

type Props = {};

const News = (props: Props) => {
  return (
    <div className='flex h-full w-full flex-col p-4'>
      <h2>Noticias</h2>
      <div className='flex flex-col space-y-3'>
        {news.map((n, i) => (
          <NewItem key={i} {...n} />
        ))}
      </div>
    </div>
  );
};

export default News;
