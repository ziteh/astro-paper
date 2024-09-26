import type { CollectionEntry } from "astro:content";

function Datetime({ date }: { date: string | Date }) {
  return (
    <span>
      {new Date(date).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })}
    </span>
  );
}

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
}

export default function ListItem({ href, frontmatter }: Props) {
  const { title, subtitle, date, updated } = frontmatter;

  return (
    <li className="my-1">
      <a
        href={href}
        className="flex flex-col space-x-4 rounded-md p-2 hover:bg-skin-card/30 sm:flex-row"
      >
        <span className="mr-4 text-skin-accent/80">
          <Datetime date={updated ?? date} />
        </span>
        <span>{title}</span>
        <span className="opacity-50">{subtitle}</span>
      </a>
    </li>
  );
}
