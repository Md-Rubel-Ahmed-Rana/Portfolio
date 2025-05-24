/* eslint-disable @typescript-eslint/no-explicit-any */
const makeBlogFormData = (values: any): FormData => {
  const formData = new FormData();

  if (Array.isArray(values.tags)) {
    formData.append("tags", JSON.stringify(values.tags));
  }
  // Append basic fields
  formData.append("title", values.title);
  formData.append("type", values.type);

  // Append thumbnail file
  if (values.thumbnail) {
    formData.append("thumbnail", values.thumbnail);
  }

  // Append body (serialize text part and separately attach files)
  values.body.forEach((section: any, index: number) => {
    formData.append(`body[${index}][title]`, section.title);
    formData.append(`body[${index}][description]`, section.description);

    section.images.forEach((file: any, fileIndex: number) => {
      formData.append(`body[${index}][images][${fileIndex}]`, file);
    });
  });

  return formData;
};

export default makeBlogFormData;
