import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { ExperienceObject } from "../lib/utils/constants";
import { Avatar, AvatarImage } from "./shadcn/avatar";

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
};

const ExperienceRow = ({ experience }: { experience: ExperienceObject }) => {
  return (
    <div className="w-full items-center">
      <div className="w-full flex items-center pb-4">
        <Avatar className="mr-4">
          <AvatarImage src={experience.logo} alt="company logo" />
        </Avatar>

        <div className="w-full text-left"> {experience.company} </div>
        <div className="hidden xl:flex w-full pl-2 text-left">
          {experience.title}
        </div>
        <div className="hidden xl:flex w-full justify-center items-center content-center">
          <div className="flex flex-row items-center pl-4">
            <CalendarDaysIcon className="w-6" />
            <div className="px-2">
              {experience.startDate.toLocaleDateString(undefined, dateOptions)}{" "}
              -{" "}
              {experience.endDate instanceof Date
                ? experience.endDate.toLocaleDateString(undefined, dateOptions)
                : experience.endDate}
            </div>
          </div>
        </div>
      </div>
      <div className="flex xl:hidden text-sm text-left pb-2">
        {experience.title}
      </div>
      <div className="flex xl:hidden text-xs">
        <div className="flex items-center pt-2">
          <CalendarDaysIcon className="w-6" />
          <div className="px-2">
            {experience.startDate.toLocaleDateString(undefined, dateOptions)} -{" "}
            {experience.endDate instanceof Date
              ? experience.endDate.toLocaleDateString(undefined, dateOptions)
              : experience.endDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceRow;
