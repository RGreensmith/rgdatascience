import CNN from './pageDefinitions/CNN.json';
import ClassificationApplication from './pageDefinitions/ClassificationApplication.json';
import classificationExplanations from './pageDefinitions/classificationExplanations.json';
import shellCrash from './pageDefinitions/shellCrash.json';
import installZsh from './pageDefinitions/installZsh.json';
const pages = [
    {
        "title": "Convolutional Neural Network",
        "image": "thumbnailImages/cnnBackground.png",
        "path": "/ConvolutionalNeuralNetwork",
        "description": CNN
    },
    {
        "title": "Classification Algorithms Intro",
        "image": "thumbnailImages/classAlgorithmBackground.png",
        "path": "/ClassificationAlgorithmsIntro",
        "description": classificationExplanations
    },
    {
        "title": "Classification Application",
        "image": "thumbnailImages/KNearestNeighboursTest.png",
        "path": "/ClassificationApplication",
        "description": ClassificationApplication
    },
    {
        "title": "Debian Shell Crash Solution",
        "image": "thumbnailImages/debianCrash.png",
        "path": "/DebianShellCrashSolution",
        "description": shellCrash
    },
    {
        "title": "How To Install Zsh",
        "image": "thumbnailImages/zshInstall.png",
        "path": "/HowToInstallZsh",
        "description": installZsh
    }
];

export default pages;
