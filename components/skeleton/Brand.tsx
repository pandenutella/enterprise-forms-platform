import Link from "next/link";
import { FC, Fragment } from "react";
import classes from "./Brand.module.css";

type Props = {
  text: string;
  href: string;
};

const Brand: FC<Props> = ({ text, href }) => {
  const words = text.split(" ").map((word) => {
    const firstLetter = word[0];
    const remaining = word.slice(1);

    return { firstLetter, remaining };
  });

  return (
    <Link href={href} className={classes.brand}>
      {words.map((word) => (
        <Fragment key={word.firstLetter + word.remaining}>
          <b>{word.firstLetter}</b>
          <small>{word.remaining}</small>{" "}
        </Fragment>
      ))}
    </Link>
  );
};

export default Brand;
