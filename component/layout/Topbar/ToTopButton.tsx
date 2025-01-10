import TailProperties, { cn } from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";

function ToTopButton({}) {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button onClick={onClick}>
      <Presenter />
    </button>
  );
} // ToTopButton(Renderer)
export default ToTopButton;

function Presenter({}: DefaultProps<never>) {
  const style: TailProperties = {
    box: `w-8 h-8 bg-neutral-950 hover:bg-neutral-900 rounded-full`,
    layout: "flex items-center justify-center",
    typo: "text-slate-300",
    etc: "shadow-base",
  };
  return (
    <div className={cn(style)}>
      <img
        src="/star_anime.gif"
        className="mr-1"
        alt="star_anime"
        width={24}
        height={24}
      />
    </div>
  );
} // Presenter
