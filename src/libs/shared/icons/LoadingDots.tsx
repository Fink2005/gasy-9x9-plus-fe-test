type Props = {
  size?: string;
};
const LoadingDots = ({ size = 'size-2' }: Props) => {
  return (
    <div className="flex space-x-1 w-full justify-center">
      <span className="sr-only">Loading...</span>
      <div className={
        `${size} bg-[#bae7ff] rounded-full animate-bounce [animation-delay:-0.2s]`
      }
      />
      <div className={`${size}
        bg-[#bae7ff] rounded-full animate-bounce [animation-delay:-0.15s]`}
      />
      <div className={`${size}
        bg-[#bae7ff] rounded-full animate-bounce`}
      />
    </div>

  );
};

export default LoadingDots;
