window.galeryManager = {
    images: [],
    loadGalery: function (albumName) {
        document.write('<script src="galeries/' + albumName + '/album.js"></script>');
    },
    createAlbumCategory: function (albumName, albumCategory, images) {
        var categoryNodes = albumCategory.split('|');
        var galeryTitle = categoryNodes.pop();
        var baseCategory = categoryNodes.join('|');

        _.each(images, function (imageObj) {
            this.images.push({
                filename: imageObj.filename,
                category: albumCategory,
                baseCategory: baseCategory,
                galeryTitle: galeryTitle,
                color: imageObj.color,
                path: 'galeries/' + albumName
            });
        }, this);
    },
    getColorsForCategory: function (category) {
        var colors = _.map(this.images, function (imageObj) {
            if (imageObj.baseCategory.indexOf(category) === 0) {
                return imageObj.color;
            }
        });
        colors = _.uniq(colors);
        return colors;
    },
    getGaleriesForCategory: function (category) {
        var categories = _.map(this.images, function (imageObj) {
            if (imageObj.baseCategory.indexOf(category) === 0) {
                return {
                    galeryTitle: imageObj.galeryTitle,
                    category: imageObj.baseCategory
                };
            }
        });
        categories = _.uniq(categories, true, function (x) {
            return JSON.stringify(x);
        });
        return categories;
    },
    getItemsForCategory: function (category) {
        return this.images;
    }
};
