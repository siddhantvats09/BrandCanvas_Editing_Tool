import classNames from "@/utils/classNames";

export default function LyricGeniusAIIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames("fill-current", className)}
      viewBox="0 0 28 28"
    >
      <path d="M4.773 13.261h1.909c.27 0 .497-.098.68-.294a1.02 1.02 0 0 0 .274-.726c0-.288-.092-.53-.275-.726a.892.892 0 0 0-.68-.294H4.774a.892.892 0 0 0-.68.294 1.028 1.028 0 0 0-.275.726c0 .288.091.53.275.727.184.197.41.294.68.293Zm11.454-2.04c-.795 0-1.471-.298-2.028-.893-.557-.595-.835-1.317-.835-2.167 0-.85.278-1.573.835-2.168.557-.595 1.233-.893 2.028-.893.175 0 .342.017.501.051.16.034.31.077.454.128V1.02c0-.289.091-.531.275-.726a.898.898 0 0 1 .68-.294h1.909c.27 0 .497.098.68.294.183.196.275.438.274.726 0 .288-.092.53-.275.727a.884.884 0 0 1-.68.293h-.954v6.12c0 .85-.279 1.573-.835 2.168-.557.595-1.233.893-2.029.893Zm-11.454-1.02h4.772c.27 0 .498-.098.681-.294a1.02 1.02 0 0 0 .274-.726c0-.289-.092-.53-.275-.726a.892.892 0 0 0-.68-.294H4.773a.892.892 0 0 0-.68.293 1.028 1.028 0 0 0-.275.727c0 .288.091.53.275.727.184.197.41.294.68.293Zm0-3.06h4.772c.27 0 .498-.098.681-.294a1.02 1.02 0 0 0 .274-.726c0-.289-.092-.53-.275-.727a.892.892 0 0 0-.68-.294H4.773a.892.892 0 0 0-.68.294 1.028 1.028 0 0 0-.275.727c0 .288.091.53.275.727.184.196.41.294.68.293Zm-.955 10.2-2.195 2.347c-.303.323-.649.395-1.039.217-.39-.178-.585-.497-.584-.957V3.06c0-.56.187-1.04.561-1.44.374-.4.824-.6 1.348-.6h10.5c.493 0 .927.162 1.301.485.374.323.561.74.56 1.25a1.298 1.298 0 0 1-.572 1.096 4.803 4.803 0 0 0-1.647 1.836 5.285 5.285 0 0 0-.597 2.474c0 .918.211 1.768.633 2.55a4.844 4.844 0 0 0 1.754 1.862 2.45 2.45 0 0 1 1.145 2.09c0 .766-.25 1.403-.752 1.913-.501.51-1.11.765-1.825.765H3.82Z" />
    </svg>
  );
}