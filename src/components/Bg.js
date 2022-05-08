import {
    Environment,
    Cloud,
    Sky,
    Stars
} from '@react-three/drei';

const environmentConfig = {
    // background={false}
    background: true,
    files: ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    // files='Skybox2.png',
    path: 'cube/',
    // preset: 'dawn',
    // scene={undefined} // adds the ability to pass a custom THREE.Scene
};

const skyConfig = {
    distance: 450000,
    sunPosition: [0, 1, 0],
    inclination: 0,
    azimuth: 0.25
};

const cloudsConfig = {
    opacity: 0.5,
    speed: 0.4, // Rotation speed
    width: 10, // Width of the full cloud
    depth: 1.5, // Z-dir depth
    segments: 20 // Number of particles
};

const starsConfig = {
    radius: 100,
    depth: 50,
    count: 5000,
    factor: 4,
    saturation: 0,
    fade: true
};

export default function Bg (props) {

    return (
        <>
            {/* WARNING */}
            {/* Environment seems to be currently broken */}
            {/* <Environment {...environmentConfig} /> */}
            {/* WARNING */}
            {/* <Sky {...skyConfig} /> */}
            <Stars {...starsConfig} />
            {/* <Cloud {...cloudsConfig} /> */}
        </>
    )
};
