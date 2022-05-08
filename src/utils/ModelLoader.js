
// TODO not really gonna use this file
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

// See the Loader base class docs for more options
// https://threejs.org/docs/#api/en/loaders/Loader

export default async function ModelLoader(initialModelUrl, options) {
    const {
        onProgress,
        delayLoad,
        meshIsCompressed,
        onError
    } = options;

    const loader = new GLTFLoader();

    const load = async (modelUrl) => {

        if (meshIsCompressed) {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath(modelUrl);
            loader.setDRACOLoader(dracoLoader);
        }

        // onProgress provides an ProgressEvent instance argument, which contains
        // .lengthComputable, .total and .loaded.
        // If the server does not set the Content-Length header; .total will be 0.
        return await loader.loadAsync(modelUrl, onProgress || undefined);
    };

    if (!delayLoad) {
        if (onError) {
            try {
                return await load(initialModelUrl);
            }
            catch (err) {
                onError(err);
                return;
            }
        }
        return await load(initialModelUrl);
    }

    return load;
};
