import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

import { education, experience } from "../../ResumeBoard/resume-data";
import { ResumeBoard } from "../../ResumeBoard/ResumeBoard";
import {
  SectionTemplate,
  SectionTemplateProps,
} from "../SectionTemplate/SectionTemplate";

export interface ResumeProps {
  variant: SectionTemplateProps["variant"];
  [rest: string]: unknown;
}

export const Resume: React.FC<ResumeProps> = React.forwardRef(
  ({ variant, ...rest }, ref): JSX.Element => {
    const { t } = useI18next();

    return (
      <SectionTemplate
        ref={ref}
        id="resume"
        variant={variant}
        title={t("Resume")}
        subtitle={t("Check out my Resume")}
        {...rest}
      >
        <ResumeBoard resume={{ education, experience }} />
      </SectionTemplate>
    );
  }
);
