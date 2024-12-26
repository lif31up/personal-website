"use client";

import TailProperties, {cn} from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";

type SidebarButtonDataType = {
	sidebar_id: string;
	active_width: string;
}
function SidebarButton({data}: DefaultProps<SidebarButtonDataType>){
	if (!data) return (<></>)
	const {sidebar_id, active_width}: SidebarButtonDataType = data;
	if (!sidebar_id || !active_width) return (<></>)
	return (<><Presenter/></>)
}
export default SidebarButton

function Presenter({data}: DefaultProps<SidebarButtonDataType>){
	const style: TailProperties = {}
	return (<button className={cn(style)}>HELLO</button>)
}