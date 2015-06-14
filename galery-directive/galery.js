var
// CB layout:

    CB_Config = 'default';

CB_WindowColor = '#fff',				// color of the CB window (note: you have to change the rounded-corner PNGs too!)
    CB_ImgMinWidth = 120,				// minimum / initial width of CB window
    CB_ImgMinHeight = 120,				// minimum / initial heigth of CB window
    CB_WinPadd = 15,					// Padding of the CB window from sides of the browser
    CB_RoundPix = 12,					// change this setting only if you are generating new PNGs for rounded corners
    CB_ImgBorder = 0,					// border size around the picture in CB window
    CB_ImgBorderColor = '#ffffff',			// border color around the picture in CB window
    CB_Padd = 3,					// padding around inside the CB window
    CB_TextH = 15,					// default height of the text area under the content in CB window (adding a comment will modify this setting)
    CB_PadT = 10,					// space in pixels between the content and the title / caption line

    CB_BodyMarginLeft = 0,				//
    CB_BodyMarginRight = 0,				// if you set margin to <body>,
    CB_BodyMarginTop = 0,				// please change these settings!
    CB_BodyMarginBottom = 0,				//

    CB_ShowThumbnails = 'auto',			// it tells CB how to show the thumbnails (auto / always / off) thumbnails are only in picture-mode!
    CB_ThumbsBGColor = '#000000',			// color of the thumbnail layer
    CB_ThumbsBGOpacity = .35,				// opacity of the thumbnail layer

    CB_SlideShowBarColor = '#ffffff',			// color of the slideshow bar
    CB_SlideShowBarOpacity = .50,			// opacity of the slideshow bar


    CB_SlideShowBarPadd = 17,				// padding of the slideshow bar (left and right)
    CB_SlideShowBarTop = 2,				// position of the slideshow bar from the top of the picture in px

    CB_SimpleDesign = 'off',				// If it's 'on', CB doesn't show the frame but only the image / content - really nice ;)


    CB_CloseBtnTop = -10,				// vertical position of the close button in picture mode
    CB_CloseBtnRight = -14,				// horizontal position of the close button in picture mode
    CB_CloseBtn2Top = -20,				// vertical position of the close button in content mode
    CB_CloseBtn2Right = -30,				// horizontal position of the close button in content mode

    CB_OSD = 'off',						// turns on OSD

// CB font, text and navigation (at the bottom of CB window) settings:

    CB_FontT = 'Helvetica',				//
    CB_FontSizeT = 12,				// These variables are referring to the title / caption line
    CB_FontColorT = '#aaaaaa',				//
    CB_FontWeightT = 'bold',			//

    CB_FontC = 'Helvetica',				//
    CB_FontSizeC = 11,				// These variables are referring to
    CB_FontColorC = '#aaaaaa',				// comment lines under the title
    CB_FontWeightC = 'normal',			//
    CB_TextAlignC = 'justify',			//
    CB_TxtHMax = 50,					// maximum height of the comment box in pixels

    CB_FontG = 'Helvetica',				//
    CB_FontSizeG = 11,				// These variables are referring to the gallery name
    CB_FontColorG = '#999',				// under the title and / or the comment
    CB_FontWeightG = 'normal',			//

    CB_ShowURL = 'off',				// It shows url of the content
    CB_ImgNum = 'off',					// It shows the ordinal number of the content in galleries
    CB_ImgNumBracket = '()',				// whatever you want ;)

    CB_ShowGalName = 'off',				// It shows gallery name
    CB_TextNav = 'off',				// It shows previous and next navigation
    CB_NavTextImgPrvNxt = 'on',			// It shows previous and next buttons instead of text
    CB_ShowDL = 'off',					// It shows download / fullsize / open in new window navigation
    CB_NavTextImgDL = 'off',				// It shows download / fullsize / open in new window buttons instead of text

    CB_ImgRotation = 'off',				// it shows the image rotation controls
    CB_NavTextImgRot = 'on',				// it shows the image rotation buttons instead of text

// Document-hiding layer's settings:

    CB_HideColor = '#000000',				// color of layer
    CB_HideOpacity = .85,				// opacity (0 is invisible, 1 is 100% color) of layer
    CB_HideOpacitySpeed = 400,			// speed of fading
    CB_CloseOnH = 'on',				// CB will close, if you click on background

// CB animation settings:

    CB_Animation = 'double',				// double, normal, off, warp or grow (high cpu usage)
    CB_ImgOpacitySpeed = 450,				// speed of picture / html page fading (in ms)
    CB_TextOpacitySpeed = 350,			// speed of text fading under the picture (in ms)
    CB_AnimSpeed = 600,				// speed of CB window's resizing animation (in ms)
    CB_ImgTextFade = 'on',				// turns on or off the fading of image or other contents and text
    CB_FlashHide = 'off',				// CB hides flash animations on the page before CB starts
    CB_SelectsHide = 'on',				// CB hides select boxes on the page before CB starts
    CB_SlShowTime = 3,				// default speed of the slideshow (in sec)

// CB picture settings:

    CB_PictureStart = 'start.png',			// filename of start image
    CB_PicturePause = 'pause.png',			// filename of pause image
    CB_PictureClose = 'close.png',			// filename of close image
    CB_PictureNext = 'next.png',			// filename of next image
    CB_PicturePrev = 'prev.png',			// filename of previous image
    CB_Preload = 'on',				// preload neighbour pictures in galleries

// CB professional settings:

    CB_PicDir = CB_ScriptDir + '/config/' + CB_Config + '/pic/',	// CHANGE ONLY IF YOU CHANGED THE DEFAULT DIRECTORY OF CB!

    CB_AllowedToRun = 'on',					// if off, CB won't start (you can change this variable without reload!)
    CB_AllowExtFunctLoad = 'off',				// if on, CB will run a function named CB_ExternalFunctionLoad(); every time after a new content has loaded (useful for audit, etc)
    CB_AllowExtFunctPageLoad = 'off',				// if on, CB will run a function named CB_ExternalFunctionPageLoad(); after your html page has fully loaded
    CB_AllowExtFunctCBClose = 'off'				// if on, CB will run a function named CB_ExternalFunctionCBClose(); after CB window has closed

;
