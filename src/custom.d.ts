// Enable importing SVG as React component in TypeScript
// Source: https://stackoverflow.com/a/59901802
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
