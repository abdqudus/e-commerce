declare module "*.svg" {
  const src: string;
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}
