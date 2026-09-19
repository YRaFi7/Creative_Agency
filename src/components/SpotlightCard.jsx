
import { useRef } from "react";
import "./SpotlightCard.css";

function SpotlightCard({
  children,
  spotlightColor = "rgba(255, 255, 255, 0.15)",
}) 
{
  const cardRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;

    if (!card){
      return;
    }

    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${mouseX}px`);
    card.style.setProperty("--mouse-y", `${mouseY}px`);
    card.style.setProperty("--spotlight-color", spotlightColor);
  }
  return (
    <div
      ref={cardRef}
      className="spotlight-card"
      onMouseMove={handleMouseMove}
    >
      <div className="spotlight-effect"></div>

      <div className="spotlight-content">
        {children}
      </div>
    </div>
  );
}
export default SpotlightCard;


