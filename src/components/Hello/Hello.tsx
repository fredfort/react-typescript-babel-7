import * as React from "react";

export interface IHelloProps {
  compiler: string
  framework: string;
}

export const title = "title";

export const Hello = (props: IHelloProps) => {
  return (
    <h1 title={process.env.PLATFORM} id={title}>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  );
};
