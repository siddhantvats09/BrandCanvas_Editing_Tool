/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { fabric } from "fabric";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { ElementsPanel } from "./panels/ElementsPanel";
import { Menu } from "./Menu";
import { TimeLine } from "./TimeLine";
import { Store } from "@/store/Store";
import "@/utils/fabric-utils";
import Sidebar from "@/components/Sidebar";
import { useSearchParams } from "next/navigation";
import "../css/toolResponsive.css";

import ContextButton from "./menu/ContextButton";
import { onetimeemailverification } from "@/utils/modalstyles";
//@ts-expect-error ddd
import Modal from "react-modal";
import { ImageEditorElement } from "@/types";
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";
import "./crop.css";

import { urlToBlob } from "@/utils/helper";
import VideoTrimmer from "./Trimvideo"

export const EditorWithStore = () => {
  const [store] = useState(new Store());
  return (
    <StoreContext.Provider value={store}>
      <VideoEditor></VideoEditor>
    </StoreContext.Provider>
  );
};
type ImageRefType = HTMLImageElement | null;
type OutputRefType = HTMLImageElement | null;


const VideoEditor = observer(() => {
  const store = React.useContext(StoreContext);
  const mounted = useRef(false);
  const canvasRef = useRef(null);
  const timelineRef = useRef(null);
  const searchParams = useSearchParams();
  const [item, setItem] = useState(
    searchParams.get("imageID")
      ? "image"
      : searchParams.get("videoID")
        ? "video"
        : "",
  );
  const [Crop, setCrop] = useState<boolean>(false);
  const [Trim, setTrim] = useState<boolean>(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [cordinatex, setcordinatex] = useState<number>(1);
  const [cordinatey, setcordinatey] = useState<number>(1);
  const [index, setindex] = useState<number>();
  const [type, settype] = useState<any>();
  const [data, setdata] = useState<any>();
  const [textvalue, settextvalue] = useState<String>();
  const [textobject, settextobject] = useState<any>();
  const [textdoubleclickID, settextdoubleclickID] = useState<any>("");
  const [cropperInstance, setCropperInstance] = useState<Cropper | null | any>(
    null,
  );
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef<ImageRefType>(null);
  const outputRef = useRef<OutputRefType>(null);

  const seletected = useRef<ImageEditorElement>();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      const parentContainer = document.getElementById("grid-canvas-container");
      const timelineContainer = document.getElementById("timeline-container");
      const initialWidth = 700;
      const initialHeight = 400;
      //@ts-expect-error ddd
      const canvas = new fabric.Canvas("canvas", {
        height: 400,
        width: 700,
        backgroundColor: "#ededed",
      });
      //@ts-expect-error ddd
      fabric.Object.prototype.transparentCorners = false;
      //@ts-expect-error ddd
      fabric.Object.prototype.cornerColor = "#00a0f5";
      //@ts-expect-error ddd
      fabric.Object.prototype.cornerStyle = "circle";
      //@ts-expect-error ddd
      fabric.Object.prototype.cornerStrokeColor = "#0063d8";
      //@ts-expect-error ddd
      fabric.Object.prototype.cornerSize = 10;
      // canvas mouse down without target should deselect active object
      canvas.on("mouse:down", function (e:any) {
        if (!e.target) {
          store.setSelectedElement(null);
        }
      });

      canvas.on("mouse:dblclick", function (event :any) {
        
        if (store.selectedElement?.type != "text") {
          const target = event.target;
          console.log(store?.selectedElement?.id,"double............")
          
          if (target && store?.selectedElement?.id != textdoubleclickID) {
            settextdoubleclickID(store?.selectedElement?.id)
            target.set({
              width: Number(target?.width),
              height: Number(target?.height),
              scaleX: 600 / Number(target?.width),
              scaleY: 350 / Number(target?.height),
            });
            if (store.selectedElement) {
              
              store.selectedElement.placement = {
                ...store.selectedElement.placement,
                width: Number(target?.width),
                height: Number(target?.height),
                scaleX: 600 / Number(target?.width),
                scaleY: 350 / Number(target?.height),
              };
            }
            canvas.discardActiveObject().renderAll();
            canvas.requestRenderAll();
          }
        }
      });

      store.setCanvas(canvas);
      //@ts-expect-error ddd
      fabric.util.requestAnimFrame(function render() {
        canvas.renderAll();
        //@ts-expect-error dddd
        fabric.util.requestAnimFrame(render);
      });

      const resizeCanvas = () => {
        const { clientWidth, clientHeight } = parentContainer as HTMLDivElement;
        const scaleWidth = clientWidth / initialWidth;
        const scaleHeight = clientHeight / initialHeight;
        const scale = Math.min(scaleWidth, scaleHeight);
        const scaleMinus = (scale / 100) * 5;
        if (parentContainer) {
          parentContainer.style.transform = `scale(${scale - scaleMinus})`;
        }

        if (timelineContainer) {
          timelineContainer.style.transform = `scale(${scale - scaleMinus})`;
        }

        canvas.renderAll();
      };

      const resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
      });
      resizeObserver.observe(parentContainer as HTMLDivElement);

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
    }
  }, []);

  useEffect(() => {
    if (searchParams.get("imageID")) {
      setItem("image");
      const imageID = localStorage.getItem(`${searchParams.get("imageID")}`);
      if (!store.images.includes(`${imageID}`)) {
        store.addImageResource(`${imageID}`);
      }
    } else if (searchParams.get("videoID")) {
      setItem("video");
      const videoID = localStorage.getItem(`${searchParams.get("videoID")}`);
      if (!store.videos.includes(`${videoID}`)) {
        store.addVideoResource(`${videoID}`);
      }
    }
  }, [searchParams, item]);

  const keyDown = (event: any) => {
    if (
      event.code === "Delete" ||
      event.code === "Del"
      // event.key === "Backspace"
    ) {
      //@ts-expect-error ddd
      store.removeEditorElement(store.selectedElement?.id);
      store.refreshElements();
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();
    if (store.selectedElement?.type === "text") {
      settextvalue(store.selectedElement?.fabricObject?.text);
      settextobject(store.selectedElement?.fabricObject);
    }

    if (
      canvasRef.current &&
      //@ts-expect-error ddd
      canvasRef.current?.contains(e.target)
    ) {
      setcordinatex(e.clientX);
      setcordinatey(e.clientY);
      if (store.selectedElement?.id) {
        setRightClicked(true);
      }
    }
    setRightClicked(true);
  };

  const handleClickOutside = (event: any) => {
    // if (
    //   canvasRef.current &&
    //   // @ts-ignore
    //   !canvasRef.current?.contains(event.target) &&
    //   timelineRef.current &&
    //   // @ts-ignore
    //   !timelineRef.current?.contains(event.target)
    // ) {
    //   store?.canvas?.discardActiveObject();
    //   store?.canvas?.renderAll();
    // }
  };

  useEffect(() => {
    const canvas = document.getElementById("canvasdiv"); // replace with your canvas element's ID
    canvas?.addEventListener("contextmenu", handleRightClick);
    //document.addEventListener('contextmenu', handleRightClick);
    return () => {
      const canvas = document.getElementById("canvasdiv");
      canvas?.addEventListener("contextmenu", handleRightClick);
      //canvas?.removeEventListener('contextmenu', handleRightClick);
    };
  }, [handleRightClick]);

  const close = (event: any) => {
    setRightClicked(false);
    store.refreshElements();
    store.setSelectedElement(null);
    event.preventDefault();
    event.stopPropagation();
  };
  const DeleteElement = (event?: any) => {
    //@ts-expect-error ddd
    store.removeEditorElement(store.selectedElement?.id);
    store.refreshElements();
    event?.preventDefault();
    event?.stopPropagation();
    setRightClicked(false);
  };
  const CopyElement = () => {
    store.copy();
    setRightClicked(false);
  };

  const PasteElement = () => {
    store.paste();
    setRightClicked(false);
  };

  // const handleCopy = (event: any) => {
  //   if (event.ctrlKey && event.key === "c") {
  //     store.copy();
  //   }
  // };

  // const handlePaste = (event: any) => {
  //   if (event.ctrlKey && event.key === "v") {
  //     store.paste();
  //   }
  // };

  const handleCopy = (event: KeyboardEvent) => {
    // Check if the focused element is the body or canvas to prevent overriding default copy behavior
    if (
      event.ctrlKey &&
      event.key === "c" &&
      (document.activeElement === document.body ||
        document.activeElement?.tagName === "CANVAS")
    ) {
      event.preventDefault(); // Prevent default copy behavior
      store.copy();
    }
  };

  const handlePaste = (event: KeyboardEvent) => {
    // Check if the focused element is the body or canvas to prevent overriding default paste behavior
    if (
      event.ctrlKey &&
      event.key === "v" &&
      (document.activeElement === document.body ||
        document.activeElement?.tagName === "CANVAS")
    ) {
      event.preventDefault(); // Prevent default paste behavior
      store.paste();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDown);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleCopy);
    document.addEventListener("keydown", handlePaste);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleCopy);
      document.removeEventListener("keydown", handlePaste);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleCopy);
    document.addEventListener("keydown", handlePaste);
    return () => {
      document.removeEventListener("keydown", handleCopy);
      document.removeEventListener("keydown", handlePaste);
    };
  }, [index, type, store]);

  const handleBringToFrontClick = () => {
    const element = store.selectedElement;
    if (element) {
      store.bringToFront(element);
      setRightClicked(false);
    }
  };

  const handleSendToBackClick = () => {
    const element = store.selectedElement;
    if (element) {
      store.sendToBack(element);
      setRightClicked(false);
    }
  };

  const handleBringForwardClick = () => {
    const element = store.selectedElement;
    if (element) {
      store.bringForward(element);
      setRightClicked(false);
    }
  };

  const handleSendBackwardClick = () => {
    const element = store.selectedElement;
    if (element) {
      store.sendBackward(element);
      setRightClicked(false);
    }
  };

  const handleUndo = () => {
    store.undo();
  };

  const handleRedo = () => {
    store.redo();
  };
  const handleKeyDown = (event: any) => {
    if (event.ctrlKey) {
      switch (event.key) {
        case "z":
          event.preventDefault();
          handleUndo();
          break;
        case "y":
          event.preventDefault();
          handleRedo();
          break;
        default:
          break;
      }
    }
  };

  const saveClick = () => {
    if (store.canvas) {
      const json = store.canvas.toJSON();
    } else {
      console.error("Canvas is not defined");
    }
  };
  const opencropmodal = () => {
    setCrop(true);
    setRightClicked(false);
    AddCropedImage();
  };

  const AddCropedImage = () => {
    const activeElement = store.selectedElement;
    if (activeElement?.type !== "image") return;
    seletected.current = activeElement;
    const dataURL = activeElement?.fabricObject?.toDataURL({});
    if (!dataURL?.length) return;
    
    urlToBlob(activeElement.fabricObject?._originalElement.src, (blob) => {
      setdata(URL.createObjectURL(blob));
    });
  };
  const handleCrop = () => {
    if (cropperInstance) {
      const croppedImage = cropperInstance.getCroppedCanvas().toDataURL(data);
      if (outputRef.current) {
        outputRef.current.src = croppedImage;
      }
      const croppedContainer = document.querySelector(
        ".cropped-container",
      ) as HTMLElement;
      if (croppedContainer) {
        croppedContainer.style.display = "flex";
      }
    }
  };

  const initializeCropper = () => {
    if (imageRef.current) {
      const cropper = new Cropper(imageRef.current, {
        aspectRatio: NaN,
        viewMode: 1,
        autoCropArea: 0.8,
        responsive: true,
        background: false,
        // Other options as needed
      });
      setCropperInstance(cropper);
    }
  };

  // Cleanup the cropper instance
  const destroyCropper = () => {
    if (cropperInstance) {
      cropperInstance.destroy();
      setCropperInstance(null);
    }
  };
  const Replace = async () => {
    // Get the cropped canvas
    const croppedCanvas = cropperInstance?.getCroppedCanvas();
    // Convert the canvas to a base64 string
    const croppedImageBase64 = croppedCanvas?.toDataURL("image/png");
    const activeElement = store.selectedElement;
    if (activeElement?.type !== "image") return;
    seletected.current = activeElement;
    store.addImageOnSelect(seletected.current, croppedImageBase64);
    setCrop(false)
  };

  useEffect(() => {
    // Initialize cropper when data changes and image is available
    if (data) {
      initializeCropper();
    }
    return () => {
      destroyCropper();
    };
  }, [data]);

  return (
    <>
      <div
        onClick={() => {
          setRightClicked(false);
        }}
        className="justify-start flex w-full  overflow-hidden overflow-x-auto relative"
        data-testid="brandCanvas"
      >
        <Sidebar />

        <div className="flex justify-center w-full">
          <div className="w-[95%]">
            <p className="text-[#8297BD] text-[20px] md:text-[24px] font-bold text-center mt-[36px] mb-8">
              Brand Canvas
            </p>

            <div className="flex h-[85vh] justify-center ">
              <div className="tool-left-panel bg-[#00000080] flex flex-col gap-4 p-4  noverflow-hidden overflow-y-auto rounded-l-lg">
                <Menu item={item} />

                <div className="hidden">
                  <ElementsPanel />
                </div>
                <div className="  flex  gap-2 absolute top-16 right-8 ">
                  {/* <div
                    className="group w-[30px] h-[30px] relative flex items-center justify-center p-2 rounded-full bg-[#3b226f] cursor-pointer text-white"
                    onClick={saveClick}
                  >
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Save
                    </span>
                    <IoSave/>
                  </div> */}

                  {/* <div
                    className="group w-[30px] h-[30px] relative flex items-center justify-center p-2 rounded-full bg-[#3b226f] cursor-pointer text-white"
                    onClick={handleUndo}
                  >
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Undo
                    </span>
                    <IoIosUndo />
                  </div>
                  <div
                    className=" group w-[30px] h-[30px] relative flex items-center justify-center p-2 rounded-full bg-[#3b226f] opacity-1 cursor-pointer text-white"
                    onClick={handleRedo}
                  >
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Redo
                    </span>
                    <IoIosRedo />
                  </div> */}
                </div>
              </div>

              <div className="tool-right-panel bg-[#3B236F] flex flex-col relative">
                <div className="overflow-hidden max-h-[400px] max-w-[700px] size-full mx-auto">
                  <div
                    id="grid-canvas-container"
                    className="flex justify-center items-center relative"
                  >
                    <div ref={canvasRef} id="canvasdiv">
                      <canvas
                        id="canvas"
                        className="h-[400px] w-[700px]  row rounded-md mt-[12px]  -mx-1"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="timeline-container"
                  className="overflow-x-auto overflow-y-auto mx-auto brand-timer relative z-10"
                  ref={timelineRef}
                >
                  <TimeLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  

      {rightClicked ? (
        <div
          className={`flex flex-col gap-5 bg-[#202020] rounded-md z-[9999999] fixed`}
          style={{
            top: `${cordinatey}px`,
            left: `${cordinatex}px`,
          }}
        >
          <div className="flex flex-col justify-center items-center border border-[#FFC01D] w-48">
            <ContextButton label="Delete" onClick={DeleteElement} />
            <ContextButton label="Crop" onClick={opencropmodal} />
            <ContextButton label="Copy" onClick={CopyElement} />
            <ContextButton label="Paste" onClick={PasteElement} />
            <ContextButton label="Trim" onClick={()=>{store.setPlaying(false) ;setTrim(true);setRightClicked(false)}} />
            <ContextButton
              label="Bring To Front"
              onClick={handleBringToFrontClick}
            />
            <ContextButton
              label="Send To Back"
              onClick={handleSendToBackClick}
            />
            <ContextButton
              label="Bring Forward"
              onClick={handleBringForwardClick}
            />
            <ContextButton
              label="Send Backward"
              onClick={handleSendBackwardClick}
            />
            <ContextButton label="Cancel" onClick={close} />
          </div>
        </div>
      ) : null}
      {Crop ? (
        <Modal
          isOpen={Crop}
          style={onetimeemailverification}
          // onRequestClose={onLastClose}
        >
          <div className="w-[600px] h-[600px] p-10 flex flex-col gap-5 bg-[#281B37] rounded-[15px] overflow-y-scroll">
            <div className="w-full flex flex-col gap-3">
              <h2 className="text-center text-[24px] font-[600] mt-1 mb-1 text-[#FFF]">
                Crop your Image
              </h2>
            </div>
            <div className="main-container">
              <div className="img-container">
                <img
                  ref={imageRef}
                  id="image"
                  src={data}
                  alt="Source"
                  className="max-h-[250px]"
                />
              </div>
              <div className="flex justify-center items-center ">
                <button
                  type="submit"
                  onClick={handleCrop}
                  className={` cursor-pointer bg-gradient-to-r from-[#B631B1] to-[#7048D7] shadow shadow-blue-500/40 hover:shadow-buttonShadow buttonShadowTransition text-white w-[110px] h-[34px] text-[14px] rounded-[30px]  hover:shadow-color-purple focus:outline-white`}
                >
                  Preview
                </button>
              </div>
              <div
                className="cropped-container max-w-[200px] mb-2"
                style={{ display: "none" }}
              >
                <img ref={outputRef} src="" id="output" alt="Cropped" />
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-[16px]">
              <button
                type="submit"
                className={` cursor-pointer bg-gradient-to-r from-[#B631B1] to-[#7048D7] shadow shadow-blue-500/40 hover:shadow-buttonShadow buttonShadowTransition text-white w-[110px] h-[34px] text-[14px] rounded-[30px]  hover:shadow-color-purple focus:outline-white`}
                onClick={() => {
                  setCrop(false);
                }}
              >
                Cancel
              </button>
              <button
                onClick={Replace}
                type="submit"
                className={` cursor-pointer bg-gradient-to-r from-[#B631B1] to-[#7048D7] shadow shadow-blue-500/40 hover:shadow-buttonShadow buttonShadowTransition text-white w-[110px] h-[34px] text-[14px] rounded-[30px]  hover:shadow-color-purple focus:outline-white`}
              >
                Replace
              </button>
              {/* <button
                type="submit"
                className={` cursor-pointer bg-gradient-to-r from-[#B631B1] to-[#7048D7] shadow shadow-blue-500/40 hover:shadow-buttonShadow buttonShadowTransition text-white w-[110px] h-[34px] text-[14px] rounded-[30px]  hover:shadow-color-purple focus:outline-white`}
              >
                Add New
              </button> */}
            </div>
          </div>
        </Modal>
      ) : null}
      {Trim ? (
        <Modal
          isOpen={Trim}
          style={onetimeemailverification}
          onRequestClose={()=>{setTrim(false)}}
        >
          <VideoTrimmer setTrim={setTrim} DeleteElement={DeleteElement}/>
        </Modal>
      ) : null}
    </>
  );
});

function BrandCanvasSuspense() {
  return (
    <Suspense>
      <VideoEditor />
    </Suspense>
  );
}

export default BrandCanvasSuspense;
