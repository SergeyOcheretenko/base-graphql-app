'use strict';

export const users = [
  { id: '1', name: 'Bond', age: 36, profession: 'Programmer' },
  { id: '2', name: 'Anna', age: 26, profession: 'Baker' },
  { id: '3', name: 'Bella', age: 18, profession: 'Mechanic' },
  { id: '4', name: 'Gina', age: 20, profession: 'Painter' },
  { id: '5', name: 'Georgina', age: 36, profession: 'Teacher' },
];

export const hobbies = [
  {
    id: '1',
    title: 'Programming',
    description: 'Using computers to make the world a better place',
    userId: '2',
  },
  {
    id: '2',
    title: 'Rowing',
    description: 'Sweat and feel better before eating donuts',
    userId: '1',
  },
  {
    id: '3',
    title: 'Swimming',
    description: 'Get in the water and learn to become the water',
    userId: '3',
  },
  {
    id: '4',
    title: 'Fencing',
    description: 'A hobby for fency people',
    userId: '4',
  },
  {
    id: '5',
    title: 'Hiking',
    description: 'Wear hiking boots and explore the world',
    userId: '5',
  },
];

export const posts = [
  { id: '1', comment: 'Building a Mind', userId: '1' },
  { id: '2', comment: 'GraphQL is Amazing', userId: '1' },
  { id: '3', comment: 'How to Change the World', userId: '2' },
];
