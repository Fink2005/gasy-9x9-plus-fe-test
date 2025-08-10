'use client';
import LeftArrowIcon from '@/libs/shared/icons/LeftArrow';
import { useRouter } from 'next/navigation';

const PreviousNavigation = ({
  baseUrl,
  isReload = false,
}:
{
  baseUrl?: string;
  isReload?: boolean;
}) => {
  const router = useRouter();
  if (isReload) {
    return (
      <button
        type="button"
        onClick={() => baseUrl ? window.location.href = baseUrl : window.history.back()}
        className="absolute left-4"
      >
        <LeftArrowIcon />
      </button>
    );
  }
  return (
    <button type="button" onClick={() => baseUrl ? router.push(baseUrl) : router.back()}>
      <LeftArrowIcon className="absolute left-4" />
    </button>
  );
};

export default PreviousNavigation;
