import React, { JSXElementConstructor } from "react";

type Props = {
  designs?: string;
  children?: JSX.Element | JSX.Element[];
};

const Container = ({ children, designs }: Props) => {
  return (
    <div className={`max-w-[1440ox] mx-auto p-5 ${designs}`}>{children}</div>
  );
};

export default Container;
