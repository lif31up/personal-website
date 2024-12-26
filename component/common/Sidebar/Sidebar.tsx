"use client";

import TailProperties, {cn} from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";
import {useEffect, useState} from "react";

function Presenter({id}:DefaultProps<never>) {
	const style: TailProperties = {}
	return (<section className={cn(style)}>
		<h1></h1>
		<div>
		</div>
	</section>)
}

type SidebarDataType = {
	active_width: string
}
function Container({id, data}: DefaultProps<SidebarDataType>){
	const [active, setActive] = useState<boolean>(false)
	useEffect((): void =>{
		if (!id) return
		let element: HTMLElement | null = document.getElementById(id)
		if (!element) return

		if (active) {element.style.width = data ? data?.active_width : "100"}
		else {element.style.width = "0"}
	}, [active])

	return (
	<section>
		<div id={id} className="overflow-hidden">
			<Presenter id={id}/>
		</div>
	</section>
	)
}

function Sidebar({}){
	const id: string = "sidebar-id--0"
	return (<section>
		<Container id={id}/>
	</section>)
}
export default Sidebar