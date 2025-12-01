import React, { useEffect } from "react";

const getFormElId = (formId) => `fd-form-${formId}`;

const FormIds = {
  home: "679d92fe97bfd787c5a1da9c",
  event: "692534ca64bd177d94dd16f8",
  blog: "692cc0989d60a5dee05cd314"
};

export default function FlodeskForm({ formName }) {
  const formId = FormIds[formName];

  useEffect(() => {
    window.fd("form", {
      formId,
      containerEl: `#${getFormElId(formId)}`,
    });
  }, [formId]);

  return <div id={getFormElId(formId)} />;
}
