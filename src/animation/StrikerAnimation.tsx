import "./StrikerAnimation.css";

const StrikerAnimation = () => {
  const courseName = "Programming Hero";
  const courseNameArray = courseName.split("");
  return (
    <div className="main">
      <div className="word">
        {courseNameArray.map((letter, i) => (
          <span
            key={letter}
            className="alphabet"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StrikerAnimation;
