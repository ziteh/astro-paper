import { LOCALE } from "@config";

interface DatetimesProps {
  date: string | Date;
  updated: string | Date | undefined | null;
}

interface Props extends DatetimesProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({
  date,
  updated,
  size = "sm",
  className = "",
}: Props) {
  return (
    <div
      className={`flex items-center space-x-2 opacity-80 ${className}`.trim()}
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          size === "sm" ? "scale-90" : "scale-100"
        } inline-block h-6 w-6 min-w-[1.375rem] fill-skin-base`}
        aria-hidden="true"
      >
        <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
        <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
      </svg> */}
      <span className={`${size === "sm" ? "text-sm" : "text-base"}`}>
        <FormattedDatetime date={date} updated={updated} />
      </span>
      {updated && updated > date ? (
        <span className={`${size === "sm" ? "text-sm" : "text-base"}`}>
          Updated
        </span>
      ) : (
        <span className="sr-only">Published</span>
      )}
    </div>
  );
}

const FormattedDatetime = ({ date, updated }: DatetimesProps) => {
  const myDatetime = new Date(
    updated && updated > date ? updated : date
  );

  // const fmtDate = myDatetime.toLocaleDateString(LOCALE.langTag, {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric",
  // });
  const fmtDate = `${myDatetime.getFullYear()}/${myDatetime.getMonth() + 1}/${myDatetime.getDate()}`;

  // const fmtTime = myDatetime.toLocaleTimeString(LOCALE.langTag, {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });
  const fmtTime = `${myDatetime.getHours()}:${myDatetime.getMinutes()}`;

  return (
    <>
      <time dateTime={myDatetime.toISOString()}>{fmtDate}</time>
      <span aria-hidden="true"> </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      <span className="text-nowrap">{fmtTime}</span>
    </>
  );
};
