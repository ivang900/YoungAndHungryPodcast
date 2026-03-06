import imgImageWithFallback from "figma:asset/eece322b820bdbbfa24417ae8fd9c3b5c0dbd8c0.png";

function ImageWithFallback() {
  return (
    <div className="absolute h-[577.986px] left-0 opacity-20 top-0 w-[1775.556px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[577.986px] left-0 top-0 w-[1775.556px]" data-name="Container" style={{ backgroundImage: "linear-gradient(161.969deg, rgba(28, 57, 142, 0.1) 0%, rgba(0, 0, 0, 0) 50%, rgba(89, 22, 139, 0.1) 100%)" }} />;
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <ImageWithFallback />
      <Container1 />
    </div>
  );
}