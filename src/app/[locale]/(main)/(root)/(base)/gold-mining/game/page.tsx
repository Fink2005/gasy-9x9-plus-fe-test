/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-case-declarations */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { createCookie } from '@/app/actions/cookie';
import GameItems from '@/components/gold-mining/GameItems';
import RobotHook from '@/components/gold-mining/RobotHook';
import useTimeInterval from '@/hooks/useTimeInterval';
import ClockIcon from '@/libs/shared/icons/Clock';
import SpeakerIcon from '@/libs/shared/icons/Speaker';
import SpeakerMutedIcon from '@/libs/shared/icons/SpeakerMuted';

import Image from 'next/image';
import { redirect } from 'next/navigation';
import type React from 'react';
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';

type GameItem = {
  id: number;
  x: number;
  y: number;
  size: number;
  type: | 'blueStar' | 'star' | 'stone' | 'blindBox';
};

type ViewportBounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  containerWidth: number;
  containerHeight: number;
};

type DistanceConfig = {
  minDistance: number;
  maxDistance: number;
  centerDistance: number;
};

type ItemDistanceSettings = {
  blueStar: DistanceConfig;
  star: DistanceConfig;
  stone: DistanceConfig;
  blindBox: DistanceConfig;
  global: DistanceConfig;
};

// Consolidated game state
type GameState = {
  // Hook state
  angle: number;
  isSwinging: boolean;
  isExtending: boolean;
  ropeLength: number;
  isShrinking: boolean;

  // Items
  blueStars: GameItem[];
  stars: GameItem[];
  stones: GameItem[];
  blindBox: GameItem[];

  // Game state
  carriedItem: GameItem | null;
  score: { original: number; newScore: number };
  isUpScore: boolean;

  // UI state
  viewportBounds: ViewportBounds;
};

type GameAction
  = | { type: 'SET_ANGLE'; payload: number | ((prevAngle: number) => number) }
    | { type: 'SET_SWINGING'; payload: boolean }
    | { type: 'SET_EXTENDING'; payload: boolean }
    | { type: 'SET_ROPE_LENGTH'; payload: number }
    | { type: 'SET_SHRINKING'; payload: boolean }
    | {
      type: 'SET_ITEMS';
      payload: {
        type: keyof Pick<GameState, 'blueStars' | 'stars' | 'stones' | 'blindBox'>;
        items: GameItem[];
      };
    }
    | { type: 'REMOVE_ITEM'; payload: { type: GameItem['type']; id: number } }
    | { type: 'SET_CARRIED_ITEM'; payload: GameItem | null }
    | { type: 'UPDATE_SCORE'; payload: { original: number; newScore: number } }
    | { type: 'SET_UP_SCORE'; payload: boolean }
    | { type: 'SET_RANDOM_BLIND_BOX'; payload: { isDisplay: boolean } }
    | { type: 'SET_VIEWPORT_BOUNDS'; payload: ViewportBounds }
    | {
      type: 'REGENERATE_ALL_ITEMS';
      payload: {
        blueStars: GameItem[];
        stars: GameItem[];
        stones: GameItem[];
        blindBox: GameItem[];
      };
    };

const initialState: GameState = {
  angle: -90,
  isSwinging: true,
  isExtending: false,
  ropeLength: 20,
  isShrinking: false,
  blueStars: [],
  stars: [],
  stones: [],
  blindBox: [],
  carriedItem: null,
  score: { original: 0, newScore: 0 },
  isUpScore: false,
  viewportBounds: {
    minX: -250,
    maxX: 180,
    minY: 300,
    maxY: 800,
    containerWidth: 400,
    containerHeight: 600,
  },
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_ANGLE':
      return {
        ...state,
        angle: typeof action.payload === 'function' ? action.payload(state.angle) : action.payload,
      };
    case 'SET_SWINGING':
      return { ...state, isSwinging: action.payload };
    case 'SET_EXTENDING':
      return { ...state, isExtending: action.payload };
    case 'SET_ROPE_LENGTH':
      return { ...state, ropeLength: action.payload };
    case 'SET_SHRINKING':
      return { ...state, isShrinking: action.payload };
    case 'SET_ITEMS':
      return { ...state, [action.payload.type]: action.payload.items };
    case 'REMOVE_ITEM':
      const itemType
        = action.payload.type === 'blueStar'
          ? 'blueStars'
          : action.payload.type === 'star'
            ? 'stars'
            : action.payload.type === 'stone'
              ? 'stones'
              : 'blindBox';
      return {
        ...state,
        [itemType]: state[itemType].filter(item => item.id !== action.payload.id),
      };
    case 'SET_CARRIED_ITEM':
      return { ...state, carriedItem: action.payload };
    case 'UPDATE_SCORE':
      return { ...state, score: action.payload };
    case 'SET_UP_SCORE':
      return { ...state, isUpScore: action.payload };
    case 'SET_VIEWPORT_BOUNDS':
      return { ...state, viewportBounds: action.payload };
    case 'REGENERATE_ALL_ITEMS':
      return {
        ...state,
        blueStars: action.payload.blueStars,
        stars: action.payload.stars,
        stones: action.payload.stones,
        blindBox: action.payload.blindBox,
      };
    default:
      return state;
  }
}

const SpaceshipGameOptimized = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const audioSrc = '/sounds/bg-music.mp3';
  const audioGetGold = '/sounds/ting.mp3';
  const [isPlaying, setIsPlaying] = useState(false);
  const [_, setIsPlaying2] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRef2 = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const audio = audioRef.current;

    if (isPlaying) {
      audio?.pause();
      setIsPlaying(false);
    } else {
      audio?.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = async () => {
      try {
        await audio?.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Không thể tự động phát nhạc:', error);
        // Trình duyệt chặn autoplay, user cần click để phát
      }
    };

    if (audio) {
      playAudio();
    }
  }, []);

  useEffect(() => {
    const audio = audioRef2.current;

    if (state.isUpScore) {
      const playAudio = async () => {
        try {
          await audio?.play();
          setIsPlaying2(true);

          // Dừng audio sau 1 giây
          setTimeout(() => {
            audio?.pause();
            if (audio) {
              audio.currentTime = 0; // Reset về đầu file
            }
            setIsPlaying2(false);
          }, 1000); // 1000ms = 1 giây
        } catch (error) {
          console.log('Không thể tự động phát nhạc:', error);
        }
      };

      if (audio) {
        playAudio();
      }
    }
  }, [state.isUpScore]);

  // Refs for DOM elements and intervals
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const hookRef = useRef<HTMLDivElement>(null);
  const hookTipMarkerRef = useRef<HTMLDivElement>(null);
  const swingAnimationRef = useRef<NodeJS.Timeout | null>(null);
  const extendIntervalRef = useRef<NodeJS.Timeout>(null);
  const retractIntervalRef = useRef<NodeJS.Timeout>(null);
  const upScoreTimeoutRef = useRef<NodeJS.Timeout>(null);

  // Item refs

  const blueStarRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const stoneRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const blindBoxRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const starRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Distance settings - using ref to avoid re-renders
  const distanceSettingsRef = useRef<ItemDistanceSettings>({
    blueStar: { minDistance: 50, maxDistance: 80, centerDistance: 110 },
    star: { minDistance: 45, maxDistance: 75, centerDistance: 105 },
    stone: { minDistance: 55, maxDistance: 85, centerDistance: 115 },
    blindBox: { minDistance: 60, maxDistance: 90, centerDistance: 120 },
    global: { minDistance: 50, maxDistance: 80, centerDistance: 100 },
  });

  const { handleTimeInterval, isCounting, timeLeft, isCompleted } = useTimeInterval();

  // Memoized viewport bounds calculation
  const calculateViewportBounds = useMemo(() => {
    return (): ViewportBounds => {
      if (!gameContainerRef.current) {
        return state.viewportBounds;
      }

      const container = gameContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      const maxItemSize = 65;
      const horizontalMargin = maxItemSize;
      const verticalMargin = maxItemSize;
      const robotAreaHeight = 200;
      const availableWidth = containerWidth - horizontalMargin * 2;

      return {
        minX: -(availableWidth / 2),
        maxX: availableWidth / 2,
        minY: robotAreaHeight + verticalMargin,
        maxY: containerHeight - verticalMargin,
        containerWidth,
        containerHeight,
      };
    };
  }, [state.viewportBounds]);

  // Memoized distance functions
  const getDistanceConfig = useCallback((itemType: GameItem['type']): DistanceConfig => {
    return distanceSettingsRef.current[itemType] || distanceSettingsRef.current.global;
  }, []);

  const getRandomDistance = useCallback(
    (itemType: GameItem['type'], bounds: ViewportBounds) => {
      const config = getDistanceConfig(itemType);
      const scale = Math.min(bounds.containerWidth / 400, bounds.containerHeight / 600);
      const scaledMin = config.minDistance * scale;
      const scaledMax = config.maxDistance * scale;
      return Math.random() * (scaledMax - scaledMin) + scaledMin;
    },
    [getDistanceConfig],
  );

  const getCenterDistance = useCallback(
    (itemType: GameItem['type'], bounds: ViewportBounds) => {
      const config = getDistanceConfig(itemType);
      const scale = Math.min(bounds.containerWidth / 400, bounds.containerHeight / 600);
      return config.centerDistance * scale;
    },
    [getDistanceConfig],
  );

  // Helper function to get distance between two different item types
  const getCrossItemDistance = useCallback(
    (itemType1: GameItem['type'], itemType2: GameItem['type'], bounds: ViewportBounds) => {
      const config1 = getDistanceConfig(itemType1);
      const config2 = getDistanceConfig(itemType2);

      // Use the larger distance requirement between the two item types
      const scale = Math.min(bounds.containerWidth / 400, bounds.containerHeight / 600);
      const distance1 = ((config1.minDistance + config1.maxDistance) / 2) * scale;
      const distance2 = ((config2.minDistance + config2.maxDistance) / 2) * scale;

      return Math.max(distance1, distance2);
    },
    [getDistanceConfig],
  );

  // Optimized item generation - Fixed to check distances between ALL item types
  const generateRandomItems = useCallback(
    (count: number, type: GameItem['type'], bounds: ViewportBounds, existingItems: GameItem[] = []): GameItem[] => {
      const items: GameItem[] = [];

      for (let i = 0; i < count; i++) {
        let attempts = 0;
        let validPosition = false;
        let newItem: GameItem;

        while (!validPosition && attempts < 100) {
          const size
            = type === 'stone'
              ? Math.random() * 15 + 30
              : type === 'blueStar'
                ? Math.random() * 15 + 15
                : type === 'blindBox'
                  ? 65
                  : Math.random() * 15 + 15;

          const halfSize = size / 2;
          const safeMinX = bounds.minX + halfSize;
          const safeMaxX = bounds.maxX - halfSize;
          const safeMinY = bounds.minY + halfSize;
          const safeMaxY = bounds.maxY - halfSize;

          const x = Math.random() * (safeMaxX - safeMinX) + safeMinX;
          const y = Math.random() * (safeMaxY - safeMinY) + safeMinY;

          newItem = {
            id: Date.now() + Math.random() + i,
            x: Math.round(x),
            y: Math.round(y),
            size: Math.round(size),
            type,
          };

          // Check distance from center (robot area) using item-specific distance
          const distanceFromCenter = Math.sqrt(newItem.x ** 2 + (newItem.y - 150) ** 2);
          const centerDistance = getCenterDistance(type, bounds);
          const tooCloseToCenter = distanceFromCenter < centerDistance;

          // Check distance from ALL existing items (both same type and different types)
          const allExistingItems = [...existingItems, ...items];
          const tooCloseToOthers = allExistingItems.some((existingItem) => {
            const distance = Math.sqrt((existingItem.x - newItem.x) ** 2 + (existingItem.y - newItem.y) ** 2);

            // Get cross-item distance requirement
            const minRequiredDistance = getCrossItemDistance(type, existingItem.type, bounds);

            return distance < minRequiredDistance;
          });

          validPosition = !tooCloseToCenter && !tooCloseToOthers;
          attempts++;
        }

        if (validPosition) {
          items.push(newItem!);
        }
      }

      return items;
    },
    [getRandomDistance, getCenterDistance],
  );

  // Updated regenerateAllItems to pass existing items for distance checking
  const regenerateAllItems = useCallback(() => {
    const bounds = calculateViewportBounds();
    // random stone number
    const stoneNumber = Math.floor(Math.random() * 3) + 1;
    // random 3 to 5
    const starNumber = Math.floor(Math.random() * 6) + 4;
    // Generate larger items first to ensure they get placed
    const blindBox = generateRandomItems(1, 'blindBox', bounds, []);
    const stones = generateRandomItems(stoneNumber, 'stone', bounds, blindBox);
    const blueStars = generateRandomItems(4, 'blueStar', bounds, [...blindBox, ...stones]);
    const stars = generateRandomItems(starNumber, 'star', bounds, [...blindBox, ...stones, ...blueStars]);

    dispatch({
      type: 'REGENERATE_ALL_ITEMS',
      payload: {
        blueStars,
        stars,
        stones,
        blindBox,
      },
    });
  }, [generateRandomItems, calculateViewportBounds]);

  // Optimized collision detection
  const checkCollisionWithBoundingRect = useCallback(() => {
    if (!hookTipMarkerRef.current || !gameContainerRef.current) {
      return null;
    }

    const markerRect = hookTipMarkerRef.current.getBoundingClientRect();
    const hookTipX = markerRect.left + markerRect.width / 2;
    const hookTipY = markerRect.top + markerRect.height / 2;
    const tipRect = new DOMRect(hookTipX - 15, hookTipY - 15, 30, 30);

    const checkRectOverlap = (rect1: DOMRect, rect2: DOMRect, tolerance = 15) => {
      return !(
        rect1.right < rect2.left - tolerance
        || rect1.left > rect2.right + tolerance
        || rect1.bottom < rect2.top - tolerance
        || rect1.top > rect2.bottom + tolerance
      );
    };

    // Check all item types in order of priority
    const itemChecks = [
      { refs: blueStarRefs, items: state.blueStars },
      { refs: starRefs, items: state.stars },
      { refs: stoneRefs, items: state.stones },
      { refs: blindBoxRefs, items: state.blindBox },
    ];

    for (const { refs, items } of itemChecks) {
      for (const [id, element] of refs.current.entries()) {
        if (element) {
          const itemRect = element.getBoundingClientRect();
          if (checkRectOverlap(tipRect, itemRect)) {
            const item = items.find(item => item.id === id);
            if (item) {
              return item;
            }
          }
        }
      }
    }

    return null;
  }, [state.blueStars, state.stars, state.stones, state.blindBox]);

  // Optimized click handler with batched updates
  const handleClick = useCallback(() => {
    if (state.isExtending) {
      return;
    }

    // Clear any existing intervals
    if (extendIntervalRef.current) {
      clearInterval(extendIntervalRef.current);
    }
    if (retractIntervalRef.current) {
      clearInterval(retractIntervalRef.current);
    }

    // Batch initial state updates
    dispatch({ type: 'SET_SWINGING', payload: false });
    dispatch({ type: 'SET_EXTENDING', payload: true });
    dispatch({ type: 'SET_SHRINKING', payload: false });

    const maxLength = Math.min(600, state.viewportBounds.containerHeight * 0.8);
    let extendLength = 20;
    let currentCarriedItem: GameItem | null = null;

    extendIntervalRef.current = setInterval(() => {
      extendLength += 2;
      dispatch({ type: 'SET_ROPE_LENGTH', payload: extendLength });

      const hitItem = checkCollisionWithBoundingRect();
      if (hitItem || extendLength >= maxLength) {
        if (extendIntervalRef.current) {
          clearInterval(extendIntervalRef.current);
        }

        if (hitItem) {
          currentCarriedItem = hitItem;
          dispatch({ type: 'SET_CARRIED_ITEM', payload: hitItem });
          dispatch({ type: 'REMOVE_ITEM', payload: { type: hitItem.type, id: hitItem.id } });

          // Remove from refs
          const refMap
            = hitItem.type === 'blueStar'
              ? blueStarRefs
              : hitItem.type === 'star'
                ? starRefs
                : hitItem.type === 'stone'
                  ? stoneRefs
                  : blindBoxRefs;
          refMap.current.delete(hitItem.id);
        }

        // Start retracting
        dispatch({ type: 'SET_SHRINKING', payload: true });
        let retract = extendLength;
        retractIntervalRef.current = setInterval(
          () => {
            if (hitItem?.type === 'stone') {
              retract -= 3;
            } else if (hitItem?.type === 'blueStar') {
              retract -= 6;
            } else {
              retract -= 4;
            }
            dispatch({ type: 'SET_ROPE_LENGTH', payload: retract });

            if (retract <= 20) {
              if (retractIntervalRef.current) {
                clearInterval(retractIntervalRef.current);
              }

              // Batch final state updates
              dispatch({ type: 'SET_EXTENDING', payload: false });
              dispatch({ type: 'SET_SHRINKING', payload: false });
              dispatch({ type: 'SET_SWINGING', payload: true });

              if (currentCarriedItem) {
                const scoreMap = {
                  blueStar: 10,
                  stone: 0,
                  blindBox: 99,
                  star: 9,
                };

                const newScore = scoreMap[currentCarriedItem.type];
                dispatch({
                  type: 'UPDATE_SCORE',
                  payload: {
                    original: state.score.original + newScore,
                    newScore,
                  },
                });

                if (currentCarriedItem.type === 'blindBox') {
                  dispatch({
                    type: 'SET_RANDOM_BLIND_BOX',
                    payload: {
                      isDisplay: true,
                    },
                  });
                }

                dispatch({ type: 'SET_CARRIED_ITEM', payload: null });
                dispatch({ type: 'SET_UP_SCORE', payload: true });

                // Auto-hide score animation
                if (upScoreTimeoutRef.current) {
                  clearTimeout(upScoreTimeoutRef.current);
                }
                upScoreTimeoutRef.current = setTimeout(() => {
                  dispatch({ type: 'SET_UP_SCORE', payload: false });
                }, 800);
              }
            }
          },
          currentCarriedItem ? 40 : 8,
        );
      }
    }, 4);
  }, [state.isExtending, state.viewportBounds.containerHeight, state.score.original, checkCollisionWithBoundingRect]);

  // Debounced resize handler
  const debouncedResize = useMemo(() => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const newBounds = calculateViewportBounds();
        dispatch({ type: 'SET_VIEWPORT_BOUNDS', payload: newBounds });
        regenerateAllItems();
      }, 150);
    };
  }, [calculateViewportBounds, regenerateAllItems]);

  // Consolidated effects
  useEffect(() => {
    // Initialize game
    handleTimeInterval(45, true);

    const updateBounds = () => {
      const newBounds = calculateViewportBounds();
      dispatch({ type: 'SET_VIEWPORT_BOUNDS', payload: newBounds });
    };

    updateBounds();

    // Add resize listener
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (swingAnimationRef.current) {
        cancelAnimationFrame(swingAnimationRef.current as unknown as number);
      }
      if (extendIntervalRef.current) {
        clearInterval(extendIntervalRef.current);
      }
      if (retractIntervalRef.current) {
        clearInterval(retractIntervalRef.current);
      }
      if (upScoreTimeoutRef.current) {
        clearTimeout(upScoreTimeoutRef.current);
      }
    };
  }, []);

  // Initialize items when bounds are ready
  useEffect(() => {
    if (gameContainerRef.current && state.viewportBounds.containerWidth > 0) {
      regenerateAllItems();
    }
  }, [state.viewportBounds.containerWidth]);

  // Handle swinging animation - Fixed version
  useEffect(() => {
    if (!state.isSwinging) {
      if (swingAnimationRef.current) {
        clearInterval(swingAnimationRef.current);
      }
      return;
    }

    let direction = 1;
    swingAnimationRef.current = setInterval(() => {
      dispatch({
        type: 'SET_ANGLE',
        payload: (prevAngle: number) => {
          const next = prevAngle + direction * 2;
          if (next > 90 || next < -90) {
            direction *= -1;
          }
          return prevAngle + direction * 2;
        },
      });
    }, 20);

    return () => {
      if (swingAnimationRef.current) {
        clearInterval(swingAnimationRef.current);
      }
    };
  }, [state.isSwinging]);

  // Save score to cookie
  useEffect(() => {
    if (state.score && timeLeft >= 0) {
      localStorage.setItem('goldMiningScore', JSON.stringify(state.score.original));
    }
    if (isCompleted) {
      const inspirationNumber = localStorage.getItem('inspiration');
      const inspirationParsed = Number(JSON.parse(inspirationNumber || '0'));
      if (inspirationParsed < 100) {
        localStorage.setItem('inspiration', (inspirationParsed + 1).toString());
      } else {
        localStorage.setItem('inspiration', '1');
      }
      redirect('/gold-mining/result');
    }
  }, [state.score, timeLeft]);

  // Add this new useEffect after the existing useEffects:
  useEffect(() => {
    if (timeLeft === 0 && isCounting) {
      // Save final score before redirect
      createCookie({
        name: 'goldMiningScore',
        value: JSON.stringify(state.score.original),
      });

      // Redirect to result page
      redirect('/gold-mining/result');
    }
  }, [timeLeft, isCounting, state.score.original]);

  // Memoized ref callbacks
  const createRefCallback = useCallback((refMap: React.RefObject<Map<number, HTMLDivElement>>) => {
    return (id: number) => (element: HTMLDivElement | null) => {
      if (element) {
        refMap.current.set(id, element);
      } else {
        refMap.current.delete(id);
      }
    };
  }, []);

  const setBlueStarRef = useMemo(() => createRefCallback(blueStarRefs), [createRefCallback]);
  const setStarRef = useMemo(() => createRefCallback(starRefs), [createRefCallback]);
  const setStoneRef = useMemo(() => createRefCallback(stoneRefs), [createRefCallback]);
  const setBlindBoxRef = useMemo(() => createRefCallback(blindBoxRefs), [createRefCallback]);

  return (
    <div
      ref={gameContainerRef}
      className="flex flex-col items-center min-h-screen bg-gold-mining-game pt-10 relative overflow-hidden select-none"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Speaker */}
      <button type="button" className="absolute top-14 left-5" onClick={togglePlayPause}>
        {isPlaying ? <SpeakerIcon /> : <SpeakerMutedIcon />}
      </button>

      {/* Clock */}
      <div className="clock-card w-[120px] h-[40px] absolute right-0 flex items-center">
        <ClockIcon className="translate-y-1" />
        <p className="text-shadow-custom text-[1rem] font-[590]">{isCounting ? timeLeft : 0}</p>
      </div>

      {/* Score */}
      <div className="clock-card w-[120px] h-[40px] absolute right-0 top-22 flex items-center space-x-3">
        <Image
          className="w-[1.5rem] h-[1.75rem] ms-3"
          src="/assets/badge-medal.png"
          width={100}
          height={100}
          alt="badge medal"
        />
        <p className="text-shadow-custom text-[1rem] font-[590]">{state.score.original}</p>
      </div>

      {/* Score Animation */}
      <p
        className={`${
          state.isUpScore ? '-translate-y-10 opacity-100' : ''
        } text-shadow-custom transition-all duration-300 opacity-0 absolute top-56 -translate-x-10`}
      >
        {state.score.newScore === -10 ? '' : '+'}
        {state.score.newScore}
      </p>

      {/* Robot + Hook */}
      <RobotHook
        angle={state.angle}
        carriedItem={state.carriedItem}
        hookRef={hookRef}
        hookTipMarkerRef={hookTipMarkerRef}
        isExtending={state.isExtending}
        isShrinking={state.isShrinking}
        isSwinging={state.isSwinging}
        ropeLength={state.ropeLength}
      />

      {/* Game Items */}
      <GameItems
        blindBox={state.blindBox}
        blueStars={state.blueStars}
        stars={state.stars}
        stones={state.stones}
        setStoneRef={setStoneRef}
        setBlindBoxRef={setBlindBoxRef}
        setBlueStarRef={setBlueStarRef}
        setStarRef={setStarRef}
      />
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={() => setIsPlaying(false)}
      />
      <audio
        ref={audioRef2}
        src={audioGetGold}
        onEnded={() => setIsPlaying2(false)}
      />

    </div>
  );
};

export default SpaceshipGameOptimized;
