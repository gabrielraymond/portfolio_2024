import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Object from "./object";

const Object3d = ({ MouseMovement }: any) => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);

  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.008;

  useEffect(() => {
    manageMouseMove(MouseMovement);
  }, [MouseMovement]);

  const manageMouseMove = (e: any) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(".object3d", { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(".object3dClosed", {
      x: `+=${xForce * 0.3}`,
      y: `+=${yForce * 0.3}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };
  return (
    <React.Fragment>
      <Object className="object3dClosed top-[50%] left-[-20%] md:left-[10vw] w-[100px] h-[100px] blur-[1px] z-40 shadow-[10px_15px_15px_2px_rgba(0,0,0,0.5)]" />
      {/* <div className="obj object3d transition-all absolute z-40 bg-[#DC5F00] top-[50%] left-[-20%] md:left-[20%] w-[100px] h-[100px] rounded-lg blur-[1px]"></div> */}
      <Object className="object3d top-[30%] left-[-20%] md:left-[5%] w-[100px] h-[100px]  blur-sm z-10 shadow-[10px_10px_5px_2px_rgba(0,0,0,0.5)]" />
      <Object className="object3dClosed top-[40%] right-[-20%] md:right-[10%] w-[150px] h-[150px]  blur-[2px] z-40 shadow-[10px_10px_5px_2px_rgba(0,0,0,0.5)]" />

      <Object className="object3dClosed bottom-0 left-[-20%] lg:left-[20%] md:left-[-10%] w-[200px] h-[200px]   blur-[2px] z-40 shadow-[10px_25px_20px_10px_rgba(0,0,0,0.5)]" />

      <Object className="object3d top-0 right-[-20%] md:right-[20%] w-[300px] h-[300px]   blur-sm z-10 shadow-[10px_5px_5px_2px_rgba(0,0,0,0.5)]" />
    </React.Fragment>
  );
};

export default Object3d;
