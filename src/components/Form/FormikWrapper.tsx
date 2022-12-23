import React, { FC } from "react";

import { FormikProvider, useFormik } from "formik";

interface Props {
  children: React.ReactNode;
}

export const FormikWrapper: FC<Props> = ({ children }) => {
  const formik = useFormik({
    initialValues: {
      shippingId: "1",
    },
    onSubmit: () => {},
  });

  return <FormikProvider value={formik}>{children}</FormikProvider>;
};
