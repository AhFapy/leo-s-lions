export const importAllImages = (directory) => {
    let images = {};
    const importAll = (r) => {
      r.keys().map((item) => {
        images[item.replace("./", "")] = r(item);
      });
    };
    importAll(require.context(directory, false, /\.(png|jpe?g|svg)$/));
    return images;
  };