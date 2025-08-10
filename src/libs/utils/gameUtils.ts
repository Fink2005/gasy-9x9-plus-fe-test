import type { GameBounds, GameItem } from '@/types/game';

export const generateRandomItems = (count: number, type: GameItem['type']): GameItem[] => {
  const items: GameItem[] = [];
  const minDistance = 60;
  const bounds: GameBounds = {
    minX: -250,
    maxX: 250,
    minY: 200,
    maxY: 600,
  };

  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let validPosition = false;
    let newItem: GameItem;

    while (!validPosition && attempts < 50) {
      const x = Math.random() * (bounds.maxX - bounds.minX) + bounds.minX;
      const y = Math.random() * (bounds.maxY - bounds.minY) + bounds.minY;
      const size = type === 'heart' ? Math.random() * 15 + 15 : type === 'stone' ? Math.random() * 20 + 30 : 25;

      newItem = {
        id: Date.now() + Math.random() + i,
        x: Math.round(x),
        y: Math.round(y),
        size: Math.round(size),
        type,
      };

      const distanceFromCenter = Math.sqrt(newItem.x ** 2 + newItem.y ** 2);
      const tooCloseToCenter = distanceFromCenter < 100;

      validPosition
        = !tooCloseToCenter
          && items.every((existingItem) => {
            const distance = Math.sqrt((existingItem.x - newItem.x) ** 2 + (existingItem.y - newItem.y) ** 2);
            return distance >= minDistance;
          });

      attempts++;
    }

    if (validPosition) {
      items.push(newItem!);
    }
  }

  return items;
};

export const checkRectOverlap = (rect1: DOMRect, rect2: DOMRect, tolerance = 0): boolean => {
  return !(
    rect1.right < rect2.left - tolerance
    || rect1.left > rect2.right + tolerance
    || rect1.bottom < rect2.top - tolerance
    || rect1.top > rect2.bottom + tolerance
  );
};

export const getScoreForItemType = (type: GameItem['type']): number => {
  switch (type) {
    case 'heart':
      return 10;
    case 'blueStar':
      return 50;
    case 'star':
      return 20;
    case 'stone':
      return 5;
    case 'blindBox':
      return 100;
    default:
      return 0;
  }
};
