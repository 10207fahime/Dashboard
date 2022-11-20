import { Skeleton } from "antd";
import { useState } from "react";
export function Skeletons() {
  const [active, setActive] = useState(true);
  const [block, setBlock] = useState(true);
  const [size, setSize] = useState("large");
  return (
    <>
      <div className="row d-flex justify-content-between">
        <div className="w-75 d-flex ">
          <Skeleton.Input active={active} size={size} />
        </div>
        <div className="w-25 ">
          <Skeleton.Avatar active={active} size={size} />
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
    </>
  );
}
