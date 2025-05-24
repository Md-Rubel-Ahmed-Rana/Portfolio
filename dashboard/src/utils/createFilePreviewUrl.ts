const createFilePreviewUrl = (file: File): string => {
  return URL.createObjectURL(file);
};

export default createFilePreviewUrl;
