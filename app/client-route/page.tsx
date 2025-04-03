"use client";

import { clientSideUtils } from "../utils/client-utils";
import React from "react";
import { useTheme } from "../shared/providers/ThemeProvider";

export default function Page() {
  const theme = useTheme();
  const result = clientSideUtils();
  return (
    <div>
      {result ?? "Client-side utility No result."}
      {theme.theme}
      <div className="image-slider-container">
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </div>
    </div>
  );
}
