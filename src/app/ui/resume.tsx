import exp from "constants";
import ExperienceRow from "./experience-row";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./shadcn/accordion";

import { experiences } from "../lib/utils/constants";
import { ExperienceObject } from "../lib/utils/constants";

const ResumeItem = ({
  experience,
  index,
}: {
  experience: ExperienceObject;
  index: number;
}) => {
  return (
    <AccordionItem value={`item-${index}`} className="pt-4">
      <AccordionTrigger>
        <ExperienceRow experience={experience} />
      </AccordionTrigger>
      <AccordionContent>
        <ul className="list-disc pl-4 ml-4 text-offwhite">
          {experience.description.map((desc) => (
            <li className="pb-6" key={desc}>
              <div dangerouslySetInnerHTML={{ __html: desc }} />
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

const Resume = () => {
  return (
    <div className=" text-tertiary">
      <Accordion type="single" collapsible>
        {experiences.map((exp, index) => (
          <ResumeItem key={exp.company} experience={exp} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default Resume;
