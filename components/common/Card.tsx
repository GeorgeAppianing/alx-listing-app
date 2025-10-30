
import React from 'react';
import Image from 'next/image';
import Button from './Button';

export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-md transition">
      <Image src={image} alt={title} width={400} height={250} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="font-bold mb-4">{price}</p>
        <Button label="Book Now" />
      </div>
    </div>
  );
};

export default Card;
