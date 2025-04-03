import { Metadata } from "next";
import React, { Suspense } from "react";
import AboutRendering from "../aboutrendering/page";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me and my journey in web development.",
};

// it over ride the default metadata from the Layout page

export default function About() {
  return (
    <div className="max-w-2xl mx-auto my-10 p-5">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hello! I am a passionate Angular developer with a strong background in
        building dynamic and efficient web applications. My journey in web
        development has been exciting and fulfilling, allowing me to work with
        modern frameworks and tools to create seamless user experiences.
      </p>
      <p className="mb-4">
        In addition to my expertise in Angular, I have substantial experience
        working with React and Next.js. These skills have enabled me to
        architect scalable and performant front-end solutions, adapting to the
        latest trends in the industry.
      </p>
      <p>
        I am always eager to learn new technologies and enhance my skill set to
        deliver top-notch software solutions. Thank you for visiting my page!
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutRendering />
      </Suspense>
    </div>
  );
}
