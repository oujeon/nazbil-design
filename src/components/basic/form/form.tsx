import React from "react";

export interface FormProps {
  classes?: string;
  inlineStyle?: React.CSSProperties;
  children?: React.ReactNode;
  action?: string;
  method?: string;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const { inlineStyle, classes, children, action, method } = props;
  //
  return (
    <form
      action={action}
      method={method}
      className={classes}
      ref={ref}
      style={{ ...inlineStyle }}
    >
      {children}
    </form>
  );
});

export default Form;
