export type GameItem = {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'heart' | 'blueStar' | 'star' | 'stone' | 'blindBox';
};

export type DebugInfo = {
  hookTipRect: DOMRect | null;
  collisionDetected: GameItem | null;
  itemRects: Array<{ id: number; rect: DOMRect; type: string }>;
};

export type GameBounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

export type GoldMiningRestTimesResponse = {
  restTimes: number;
  lastUpdatedTime: string | null;
  timeRestore: number;
  totalTimes: number;
};
