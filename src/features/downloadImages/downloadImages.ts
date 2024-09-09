export const downloadImages = async (imageUrls: string[]) => {
  const filePromises = imageUrls.map(async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      // Create a File object with a unique name
      const fileName = imageUrl.split("/").pop(); // Extract the filename from the URL
      if (fileName) {
        const file = new File([blob], fileName, { type: blob.type });
        return file;
      }
    } catch (error) {
      console.error(`Error downloading image from URL: ${imageUrl}`, error);
      return null; 
    }
  });

  const files = await Promise.all(filePromises);
  return files.filter((file) => file !== null); // Remove any null entries (failed downloads)
};


