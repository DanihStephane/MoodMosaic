import { Mood } from '../types';

export const moods: Mood[] = [
  {
    id: 'joy',
    emoji: '😄',
    name: 'Joie',
    colors: ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB'],
    animation: 'floating-bubbles'
  },
  {
    id: 'sadness',
    emoji: '😢',
    name: 'Tristesse',
    colors: ['#4682B4', '#483D8B', '#2F4F4F', '#778899'],
    animation: 'gentle-waves'
  },
  {
    id: 'anger',
    emoji: '😡',
    name: 'Colère',
    colors: ['#FF4500', '#8B0000', '#FF6347', '#DC143C'],
    animation: 'pulsing-particles'
  },
  {
    id: 'serenity',
    emoji: '🧘‍♀️',
    name: 'Sérénité',
    colors: ['#98FB98', '#E0FFFF', '#F0F8FF', '#B0E0E6'],
    animation: 'floating-circles'
  },
  {
    id: 'excitement',
    emoji: '🎉',
    name: 'Excitation',
    colors: ['#FF1493', '#FF69B4', '#FFD700', '#FF4500'],
    animation: 'sparkling-stars'
  }
];