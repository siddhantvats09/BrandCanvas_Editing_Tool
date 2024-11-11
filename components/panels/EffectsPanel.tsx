"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { EffectResource } from "../entity/EffectResource";
import { isEditorImageElement, isEditorVideoElement } from "@/store/Store";

export const EffectsPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedElement = store.selectedElement;
  return (
    <>
      {selectedElement &&
      (isEditorImageElement(selectedElement) ||
        isEditorVideoElement(selectedElement)) ? (
        <EffectResource editorElement={selectedElement} />
      ) : (
        <div className="w-full text-white">Please Select Image/Video First</div>
      )}
    </>
  );
});
