interface ScoreDisplayProps {
  score: number;
}

export const ScoreDisplay = ({ score }: ScoreDisplayProps) => {
  return (
    <div className="absolute top-4 left-4 text-xl font-bold text-yellow-800">
      Score:
      {score}
    </div>
  );
};
