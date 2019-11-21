import * as React from "react";

interface Props {
  children: React.ReactType | React.ComponentType | React.ReactNode;
}

const Card: React.FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Card;
