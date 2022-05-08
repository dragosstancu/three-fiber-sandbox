import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls, ContactShadows } from '@react-three/drei';
import Camera from './components/Camera';
import Text from './components/Text';
import Bag from './models/Bag';
// import { a as web } from '@react-spring/web';

// import { a as three } from '@react-spring/three'

// import Box from './components/Box';
// import Bg from './components/Bg';
// import Info from './components/Info';
// import Curiosity from './models/Curiosity';
// const GH_REPO = 'https://github.com/wswoodruff/three-fiber-lab';
// const PROGRAMMER_RED = 'rgb(255, 0, 0)';
// const PROGRAMMER_GREEN = 'rgb(10,10,10)';
// const PROGRAMMER_BLUE = 'rgb(10,10,20)';
// const gridHelperConfig = {
//     // args: [ size, divisions, centerLineColor, gridColor ]
//     args: [50, 40, PROGRAMMER_BLUE, PROGRAMMER_GREEN]
// };



export default function Scene({ ...props }) {
    // const Curiosity = useGLTF('models/glb/curiosity.glb');

    // console.log("Curiosity", Curiosity);
    // const curiosity = ModelManager('/models/glb/curiosity.glb', {
    //     //
    // });
    return (
        <>
            <Canvas shadows dpr={[1, 2]} alpha={false}>
                <OrbitControls
                    makeDefault
                    autoRotate
                    autoRotateSpeed={0.01}
                    maxPolarAngle={3 * Math.PI / 5}
                    // maxAzimuthAngle={3*Math.PI / 5}
                    // maxPolarAngle={3*Math.PI/4}
                    // minAzimuthAngle={-Math.PI / 4}
                    minPolarAngle={2 * Math.PI / 5}
                    enableZoom={true}
                    enablePan={false}
                    enableDamping={true}
                    maxDistance={.5}
                    minDistance={.2}
                />
                <ambientLight intensity={.7} />
                <pointLight intensity={.7} decay={1} position={[-1, 1, 1]} distance={0} />
                <pointLight intensity={.7} decay={1} position={[1, 1, 1]} distance={0} />
                <Suspense fallback={null}>
                    <Bag scale={1} />
                    {/* <Bg /> */}
                    <Camera position={[5, 0, 0]} fov="50" />
                    {/* <Box position={[0, 3, 0]} /> */}
                    <Text
                        color="#444"
                        // _onClick={() => window.open(_GH_REPO)}
                        position={[-10, 0, 0]}
                        anchorX="center"
                        fontSize={1}
                        maxWidth={200}
                        lineHeight={1}
                        letterSpacing={0.02}
                        anchorY="middle"
                        fillOpacity={0.1}
                        strokeWidth={'1%'}
                        strokeColor="#444"
                        rotation={[0, Math.PI / 2, 0]}
                    >
                        ElleVet Hemp CBD + CBDA Chews
                    </Text>
                    {/* <!--<Curiosity scale={2.4} /> */}

                    {/* <gridHelper {...gridHelperConfig} /> */}
                    {/* <Info /> */}
                </Suspense>
                <ContactShadows rotation-x={Math.PI / 2} position={[0, 0, 0]} opacity={0.9} width={20} height={20} blur={2} far={4.5} />
            </Canvas>
            <Loader />
        </>
    );
};
