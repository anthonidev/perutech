import React from 'react';

const news = [
  {
    title: 'Noticia 1',
    author: 'Autor 1',
    description: 'Descripcion 1',
    tags: [
      {
        name: 'tag1',
        color: 'red',
      },
      {
        name: 'tag2',
        color: 'blue',
      },
      {
        name: 'tag3',
        color: 'green',
      },
    ],
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Noticia 1',
    author: 'Autor 1',
    description: 'Descripcion 1',
    tags: [
      {
        name: 'tag1',
        color: 'red',
      },
      {
        name: 'tag2',
        color: 'blue',
      },
      {
        name: 'tag3',
        color: 'green',
      },
    ],
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Noticia 1',
    author: 'Autor 1',
    description: 'Descripcion 1',
    tags: [
      {
        name: 'tag1',
        color: 'red',
      },
      {
        name: 'tag2',
        color: 'blue',
      },
      {
        name: 'tag3',
        color: 'green',
      },
    ],
    image: 'https://via.placeholder.com/100/100',
  },
];

type Props = {};

const News = (props: Props) => {
  return (
    <div className='flex h-full w-full flex-col p-4'>
      <h2>Noticias</h2>
      <div className='flex flex-col'>
        {news.map((n, i) => (
          <div key={i} className='flex flex-col'>
            <img src={n.image} alt={n.title} />
            <h3>{n.title}</h3>
            <p>{n.description}</p>
            <p>{n.author}</p>
            <div>
              {n.tags.map((t, i) => (
                <span key={i} className={`bg-${t.color}-500`}>
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
