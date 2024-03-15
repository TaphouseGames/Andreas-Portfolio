"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "./shadcn/avatar";

const Button = ({
  text,
  url,
  logo,
}: {
  text: string;
  url: string;
  logo: string;
}) => {
  return (
    <div className="pt-6 h-full">
      <Tilt
        options={{
          scale: 1.1,
          reverse: true,
        }}
      >
        <motion.div className="link-gradient p-0.5 rounded-xl opacity-90 hover:cursor-pointer">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="bg-secondary text-tertiary rounded-lg flex justify-left items-center h-12"
          >
            <Avatar className="m-4">
              <AvatarImage src={logo} alt="company logo" />
            </Avatar>
            {text}
          </a>
        </motion.div>
      </Tilt>
    </div>
  );
};

const ButtonContainer = () => {
  return (
    <div className="my-6">
      <Button
        text={"LinkedIn"}
        url="https://www.linkedin.com/in/andreas-freiburg-79911878/"
        logo="/assets/logos/linkedIn.png"
      />
      <Button
        text={"Midnight at the Disco"}
        url="https://store.steampowered.com/app/2320890/Midnight_at_the_Disco/"
        logo="/assets/logos/steam.png"
      />
      <Button
        text={"Game Jam games"}
        url="https://crookedblackheart.itch.io/"
        logo="/assets/logos/itch.png"
      />

      <Button
        text={"Dance Floor Shader Code"}
        url="https://godotshaders.com/shader/dance-floor-shader/"
        logo="/assets/logos/godot.webp"
      />
      <Button
        text={"Portfolio Source Code"}
        url="https://github.com/TaphouseGames/Andreas-Portfolio"
        logo="/assets/logos/github.png"
      />
    </div>
  );
};

export default ButtonContainer;
