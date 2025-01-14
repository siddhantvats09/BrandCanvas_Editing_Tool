import * as React from "react"
import { SVGProps } from "react"
const EditSVGIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#fff"
      d="M2.5 14.373v3.125h3.125l9.217-9.217-3.125-3.125L2.5 14.373Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"
    />
  </svg>
)
export default EditSVGIcon
