import React from 'react';

type Props = {
  title: string;
  author: string;
  description: string;
  tags: {
    name: string;
    color: string;
    bgColor: string;
  }[];
  image: string;
};

const NewItem = ({ title, author, description, tags, image }: Props) => {
  return (
    <div className='flex flex-col rounded-md bg-gray-200 p-2'>
      <div className='flex space-x-1'>
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{ color: tag.color, backgroundColor: tag.bgColor }}
            className={`rounded-md px-2 py-1 text-[0.5rem]`}
          >
            {tag.name}
          </span>
        ))}
      </div>
      <img
        src={image}
        alt={title}
        className='my-1 h-24 rounded-lg object-cover'
      />
      <div className='flex space-x-2'>
        <img src={author} alt={title} className='h-8 w-8 rounded-full' />
        <div className='flex flex-col'>
          <h3 className='text-sm font-semibold'>{title}</h3>
          <p className='text-xs text-gray-600'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
