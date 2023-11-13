import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { CaptionProps } from "react-day-picker";

const CustomCaption = (props: CaptionProps) => {
	return (
		<p className="body-semibold text-dark900_light900 flex flex-1 justify-between capitalize">
			{format(props.displayMonth, "MMMM", { locale: pl })}
			<span className="text-light-600">
				{format(props.displayMonth, "yyyy")}
			</span>
		</p>
	);
};

export default CustomCaption;
