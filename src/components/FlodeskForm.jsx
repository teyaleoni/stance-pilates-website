import React, { useEffect } from "react";

const getFormElId = (formId) => `fd-form-${formId}`;

export default function FlodeskForm() {
  const formId = "679d92fe97bfd787c5a1da9c";

  useEffect(() => {
    window.fd("form", {
      formId,
      containerEl: `#${getFormElId(formId)}`,
    });
  }, [formId]);

  return <div id={getFormElId(formId)} />;
}
