window.galeryManager = {
    images: [],
    loadGalery: function(albumName){
        document.write('<script src="galeries/' + albumName + '/album.js"></script>');
    },
    createAlbumCategory: function(albumName, albumCategory, images){
        _.each(images, function(imageObj){
            images.push({
                filename: imageObj.filename,
                category: albumCategory,
                color: imageObj.color,
                path: 'galeries/' + albumName
            });
        });
    },
    getItemsForCategory: function(category){
        return this.images;
    }
};
