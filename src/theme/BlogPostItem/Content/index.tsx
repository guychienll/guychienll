import React, { type ReactNode } from "react";
import Content from "@theme-original/BlogPostItem/Content";
import type ContentType from "@theme/BlogPostItem/Content";
import type { WrapperProps } from "@docusaurus/types";
import Giscus from "../../../components/Giscus";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
  return (
    <>
      <Content {...props} />
      <Giscus />
    </>
  );
}
