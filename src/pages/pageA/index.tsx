import React from "react";
import { ComponentA } from "@/components/componentA";

/**
 * Page A
 */
export const PageA: React.VFC = () => (
  <div>
    <h3>Page A</h3>
    <p>{import.meta.env.MODE}</p>
    <p>{import.meta.env.VITE_HOGE_KEY}</p>
    <ComponentA />
  </div>
);
