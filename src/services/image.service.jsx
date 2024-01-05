class ImageService {
  API_URL = "http://localhost:3001/photos";

  async list() {
    try {
      const response = await fetch(this.API_URL);
      const photos = await response.json();
      return photos;
    } catch (error) {
      throw error;
    }
  }

  async listBraziliansImages() {
    try {
      const response = await fetch(this.API_URL);
      const photos = await response.json();
      const brazilianPhotos = photos.filter(photo => photo.country === "Brasil");
      return brazilianPhotos;
    } catch (error) {
      throw error;
    }
  }

  async create(url, title, continent, country, city, width, height) {
    const newPhoto = { url, title, continent, country, city, width, height };
    try {
      const response = await fetch(this.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPhoto),
      });
      const createdPhoto = await response.json();
      return createdPhoto;
    } catch (error) {
      throw error;
    }
  }
}

export default ImageService;