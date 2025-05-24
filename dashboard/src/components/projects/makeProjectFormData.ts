/* eslint-disable @typescript-eslint/no-explicit-any */

const makeProjectFormData = (values: any): FormData => {
  const formData = new FormData();
  for (const key in values) {
    const value = values[key];

    if (key === "projectLength") {
      formData.append("projectLength[startDate]", value.startDate.toString());
      if (value.endDate) {
        formData.append("projectLength[endDate]", value.endDate.toString());
      }
    } else if (key === "screenshots" && Array.isArray(value)) {
      value.forEach((file: File) => {
        formData.append(`screenshots`, file);
      });
    } else if (key === "thumbnail") {
      formData.append("thumbnail", value);
    } else if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item));
    } else {
      formData.append(key, value);
    }
  }
  return formData;
};

export default makeProjectFormData;
