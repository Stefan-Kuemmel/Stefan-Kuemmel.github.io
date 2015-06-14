window.galeryManager = {
    images: [],
    loadGalery: function(albumName){
        document.write('<script src="galeries/' + albumName + '/album.js"></script>');
    },
    createAlbumCategory: function(albumName, albumCategory, images){
        _.each(images, function(imageObj){
            this.images.push({
                filename: imageObj.filename,
                category: albumCategory,
                color: imageObj.color,
                path: 'galeries/' + albumName
            });
        }, this);
    },
    getItemsForCategory: function(category){
        return this.images;
    }
};
