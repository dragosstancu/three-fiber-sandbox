import { Stats, useDetectGPU } from '@react-three/drei';
import { useEffect } from 'react/cjs/react.production.min';

export default function Info() {

    const gpuInfo = useDetectGPU();

    // useEffect(() => {


    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    console.log(`GPU INFO:`, gpuInfo);

    return <Stats />;
};
