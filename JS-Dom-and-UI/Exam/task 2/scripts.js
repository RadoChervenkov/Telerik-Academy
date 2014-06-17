$.fn.gallery = function (size) {
    var DEFAULT_GALLERY_COLUMNS = 4,
        DEFAULT_IMAGE_WIDTH = 260;

    var $this = $(this),
        $parent = $this;

    var gallerySize = size || DEFAULT_GALLERY_COLUMNS;
    var totalPictures = $this.find('.gallery-list').children('.image-container').size();

    $this.addClass('gallery');
    $this.find('.gallery-list').css('width', DEFAULT_IMAGE_WIDTH * gallerySize);
    $this.find('.selected').hide();

    $this.on('click', '.image-container', function () {
        $this = $(this);
        $parent.find('.gallery-list').addClass('blurred');
        var $frontImages = $parent.find('.selected');
        $frontImages.addClass('disabled-background');

        var currentId = $this.find('img').attr('data-info');

        generateImageElements(currentId);

        $parent.find('.selected').show();
    });

    $this.on('click', '.selected .current-image', function () {
        $parent.find('.gallery-list').removeClass('blurred');
        $parent.find('.selected').removeClass('disabled-background');
        $parent.find('.selected').hide();
    });

    $this.on('click', '.selected .previous-image', function () {
        $this = $(this);
        var currentId = parseInt($parent.find('.selected .current-image img').attr('data-info'));
        if (currentId == 1) {
            currentId = totalPictures;

        } else {
            currentId -= 1;
        }

        generateImageElements(currentId);
    });

    $this.on('click', '.selected .next-image', function () {
        $this = $(this);
        var currentId = parseInt($parent.find('.selected .current-image img').attr('data-info'));
        if (currentId == totalPictures) {
            currentId = 1;

        } else {
            currentId += 1;
        }

        generateImageElements(currentId);
    });

    function getPicturesFileName(currentPictureId) {
        var currentId = parseInt(currentPictureId),
            totalPictures = $parent.find('.gallery-list').children('.image-container').size(),
            fileNames = [];
        fileNames['previous'] = currentId > 1 ? currentId - 1 : totalPictures;
        fileNames['current'] = currentId;
        fileNames['next'] = currentId < totalPictures ? currentId + 1 : 1;

        return fileNames;
    }

    function generateImageElements(currentId) {
        var pictureNames = getPicturesFileName(currentId);
        $parent.find('.selected .previous-image img').attr('src', 'imgs/' + pictureNames['previous'] + '.jpg').attr('data-info', pictureNames['previous']);
        $parent.find('.selected .current-image img').attr('src', 'imgs/' + pictureNames['current'] + '.jpg').attr('data-info', pictureNames['current']);
        $parent.find('.selected .next-image img').attr('src', 'imgs/' + pictureNames['next'] + '.jpg').attr('data-info', pictureNames['next']);
    }
};