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
}

export const Resume = React.forwardRef<SectionTemplateProps, ResumeProps>(
  ({ variant }, ref): JSX.Element => {
    const { t } = useI18next();

    return (
      <SectionTemplate
        ref={ref}
        id="resume"
        variant={variant}
        title={t("Resume")}
        subtitle={t("Check out my Resume")}
      >
        <ResumeBoard resume={{ education, experience }} />
      </SectionTemplate>
    );
  }
);

Resume.displayName = "Resume";
