import classNames from "@/utils/classNames";

export default function LogOutNewIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      className={classNames("fill-current", className)}
    >
      <path
        d="M14.583 8.335V6.25A2.083 2.083 0 0 0 12.5 4.168H5.208a2.083 2.083 0 0 0-2.083 2.083v12.5a2.083 2.083 0 0 0 2.083 2.084H12.5a2.083 2.083 0 0 0 2.083-2.084v-2.083M9.375 12.5h12.5m0 0L18.75 9.375m3.125 3.125-3.125 3.125"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
