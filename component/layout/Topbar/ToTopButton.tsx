import TailProperties, { cn } from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";

/* ToTopButton Component:
 * A button that scrolls the page smoothly to the top when clicked.*/
function ToTopButton({}) {
  /* Handle click event:
   * Scrolls the window to the top with smooth animation.*/
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Render the button and pass the Presenter component for styling and visuals
  return (
    <button onClick={onClick}>
      <Presenter />
    </button>
  );
} // ToTopButton(Renderer)
export default ToTopButton;

// Presentational Component of the ToTopButton
function Presenter({}: DefaultProps<never>) {
  // Define styles for the button's appearance using TailProperties
  const style: TailProperties = {
    box: `w-10 h-10 -m-1 bg-neutral-950 hover:bg-neutral-900 rounded-full`,
    layout: "flex items-center justify-center",
    typo: "text-slate-300",
    etc: "shadow-base",
  }; // style
  // Render the styled button with an animated star icon
  return (
    <div className={cn(style)}>
      <img src="/star_anime.gif" alt="star_anime" width={24} height={24} />
    </div>
  );
} // Presenter()
