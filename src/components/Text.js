import React from 'react';
import { Text } from '@react-three/drei';

// const TEST_TEXT = `
//     ONE TIME A REALLY LONG TIME AGO SOMETHING CRAZY HAPPENED. AND IT WAS IN SPACE TOO.
//     AND THEN THE LIZARDS SHOWED UP AS YOU ALREADY KNOW THEY ARE ALWAYS WATCHING WITH THEIR LIZARD EYES.
//     PEOPLE WERE GASPING FOR AIR AS THEY REALIZED IT WAS ME.
// `;

export default function AppText(props) {
    return (
        <Text
            color={'#444'}
            fontSize={3}
            maxWidth={20}
            lineHeight={1}
            letterSpacing={0}
            textAlign={'center'}
            font="/fjalla.woff"
            anchorX="center"
            anchorY="middle"
            {...props}
        >
            {props.children}
        </Text>
    );
};
