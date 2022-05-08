import {
    PerspectiveCamera,
    // CubeCamera,
    OrbitControls,
    // GizmoHelper as AxisGizmoHelper,
    // GizmoViewport as AxisGizmoViewport
} from '@react-three/drei';

export default function Cam(props) {
    const {
        orbit = true,
        autoRotate = true,
        autoRotateSpeed = .3,
        position = [10, 0, 0],
    } = props;
    return (
        <>
            <PerspectiveCamera makeDefault position={position} near={.1} far={20} />
            {orbit && <OrbitControls
                autoRotate={autoRotate}
                autoRotateSpeed={autoRotateSpeed}
            />}
            {/* <AxisGizmoHelper
                alignment="bottom-right" // widget alignment within scene
                margin={[80, 80]} // widget margins (X, Y)
            // onUpdate={ called during camera animation }
            // onTarget={ return current camera target (e.g. from orbit controls) to center animation }
            >
                <AxisGizmoViewport
                    axisColors={['#666', '#666', '#666']}
                    labelColor={'#fff'}
                />
            </AxisGizmoHelper> */}
        </>
    );
}
