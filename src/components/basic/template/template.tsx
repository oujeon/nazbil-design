import React from "react";

export interface TemplateProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  id?: string;
}

const Template = React.forwardRef<HTMLTemplateElement, TemplateProps>(
  (props, ref) => {
    const { inlineStyle, classes, children, id } = props;
    //
    return (
      <template
        id={id}
        className={classes}
        ref={ref}
        style={{ ...inlineStyle }}
      >
        {children}
      </template>
    );
  }
);

export default Template;
