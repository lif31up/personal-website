import TailProperties, {cn} from "@/styles/TailProperties";

function Navigator(){
	const style: TailProperties = {
		box: "flex justify-left items-center",
		bg_border: "bg-slate-900 shadow-md",
		layout: "w-full h-14 px-4 pb-1",
		typo: "text-white",
		etc: "z-50 top-0 left-0 absolute"
	} // style
	return (
	<>
		<div className="w-full h-14"/>
		<section className={cn(style)}>
			<h1 className="font-bold text-sm">lif31up personal <br/> website</h1>
		</section>
	</>
	)
}
export default Navigator;