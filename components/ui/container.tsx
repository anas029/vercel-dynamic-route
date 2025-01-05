import * as React from "react";

interface ContainerProps {
	children: React.ReactNode;
}
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
	className?: string;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
	({ children, className, ...props }, ref) => {
		return (
			<div
				className={cn("mx-auto max-w-7xl text-right", className)}
				ref={ref}
				{...props}>
				{children}
			</div>
		);
	}
);
Container.displayName = "main";

export default Container;
